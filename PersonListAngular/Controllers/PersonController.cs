using MvcApp2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MvcApp2.Controllers
{
    public class PersonController : ApiController
    {
        public IEnumerable<Person> Get()
        {
            return new PersonRepository().GetAll();
        }

        public Person Get(int id)
        {
            var person = new PersonRepository().Select(e => e.id == id).FirstOrDefault();

            if (person == null)
                throw new ArgumentException(String.Format("Could not find person object with id: {0}", id));

            return person;
        }

        public HttpResponseMessage Post(Person p)
        {


            validatePerson(p);

            var repo = new PersonRepository();
            var person = repo.Select(e => e.id == p.id).FirstOrDefault();

            if (person != null)
                throw new ArgumentException(String.Format("Person object with id: {0} already exists.", p.id));

            
            repo.Add(p);

            person = Get(p.id);

            HttpResponseMessage response = Request.CreateResponse<Person>(HttpStatusCode.Created, person);

            return response;

        }

        public void DeletePerson(int id)
        {
            new PersonRepository().Delete(id);
        }

        public void PutPerson(Person p)
        {
            validatePerson(p);

            var person = Get(p.id);


            if (person == null)
                throw new HttpResponseException(HttpStatusCode.BadRequest);

            new PersonRepository().Update(p);
        }

        void validatePerson(Person p)
        {
            if (p == null)
                throw new ArgumentNullException("Must pass person object");

            if (p.id == 0)
                throw new ArgumentException("Person object must have valid id > 0");

            if (String.IsNullOrWhiteSpace(p.name))
                throw new ArgumentException("Person object must have valid name");
        }

    }
}
