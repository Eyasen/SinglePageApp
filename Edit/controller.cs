using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AccessTechbd.Controllers
{
    public class CountryController : Controller
    {
        private Models.dbStuffManagementEntities db = new Models.dbStuffManagementEntities();
        // GET: Country
        public ActionResult CountryIndex()
        {
            return View();
        }
        [HttpGet]
        public ActionResult AddCountry()
        {
            return View();
        }
        [HttpPost]
        public JsonResult AddCountry(Models.Country country)
        {
            if (ModelState.IsValid)
            {
                db.Countries.Add(country);
                db.SaveChanges();
            }
            else
            {

            }
            return Json(country);
        }
        public JsonResult GetCountry()
        {
            var cnt = db.Countries.Select(country => new
            {
                country.Country_Id,
                country.Country_Name

            }).ToList();

            return Json(new { result = cnt }, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult DeleteCountry(int ID)
        {
            Models.Country cnt = db.Countries.Find(ID);
            db.Entry(cnt).State = System.Data.Entity.EntityState.Deleted;
            //db.Countries.Remove(cnt);
            db.SaveChanges();
            db.Countries.Select(country => new
            {
                country.Country_Id,
                country.Country_Name

            }).ToList();

            return Json(new { result = cnt }, JsonRequestBehavior.AllowGet);
        }


        [HttpGet]
        public JsonResult GetCountryById (int id)
        {

            var Country = db.Countries.Where(x => x.Country_Id == id).Select(a => new {
                countryId = a.Country_Id,
                countryName = a.Country_Name

            }).FirstOrDefault();

            return Json(Country, JsonRequestBehavior.AllowGet);
        }

        public ActionResult SelectCountry()
        {

            return View();

        }

        [HttpPost]
        public JsonResult UpdateCountry(int countryId, string countryName)
        {
            var Country = db.Countries.Where(a => a.Country_Id == countryId).SingleOrDefault();
            if (Country != null)
            {
                 Country.Country_Id = countryId;
                 Country.Country_Name =  countryName;
                 db.SaveChanges();
            }

            return Json(new { success = true }, JsonRequestBehavior.AllowGet);
        }
    }
}