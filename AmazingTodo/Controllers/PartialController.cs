using System.Web.Mvc;

namespace AmazingTodo.Controllers
{
    public class PartialController : Controller
    {
        //
        // GET: /

        public ViewResult Index()
        {
            return this.View("/Views/Index.cshtml");
        }

        //
        // GET: /partial/name

        public ActionResult Partial(string name)
        {
            return this.PartialView("/Views/Partials/" + name + ".cshtml");
        }

        //
        // GET: /template/name

        public ActionResult Template(string name)
        {
            return this.PartialView("/Views/Templates/" + name + ".cshtml");
        }

    }
}
