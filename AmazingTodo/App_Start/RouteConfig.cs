using System.Web.Mvc;
using System.Web.Routing;

namespace AmazingTodo {
    public class RouteConfig {
        public static void RegisterRoutes(RouteCollection routes) {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Partials",
                url: "partial/{name}",
                defaults: new {controller = "Partial", action = "Partial", name = "List"}
                );

            routes.MapRoute(
               name: "Templates",
               url: "template/{name}",
               defaults: new { controller = "Partial", action = "Template", name = "AllTemplates" }
               );

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Partial", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}