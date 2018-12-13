(ns cheshire-cat.handler
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            ;; rings for web server thingz
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [ring.middleware.json :as ring-json]
            [ring.util.response :as rr]
            ;; json for messing with my json blob file
            [clojure.data.json :as cjson]))

(defroutes app-routes
  (GET "/" [] "Hello World")
  (GET "/cheshire-cat" []
    ;; Original line that works, body is a map
    ;;(rr/response {:name "Cheshire Cat" :status :grinning}))

    ;; This works but downloads a file likely because the body is a string
    ;;(rr/response (slurp "resources/public/cats.json")))

    ;; This works but I want to get the key as a proper key instead of a string
    (rr/response (cjson/read-str (slurp "resources/public/cats.json"))))
  (route/not-found "Not Found"))

(def app
  (-> app-routes
      (ring-json/wrap-json-response)
      (wrap-defaults site-defaults)))