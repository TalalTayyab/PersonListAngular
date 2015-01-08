using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MvcApp2.Models
{
    public class PersonRepository
    {
        public IEnumerable<Person> GetAll()
        {
            return PersonDataStorage.Persons;
        }

        public IEnumerable<Person> Select(Func<Person,bool> exp)
        {
            return PersonDataStorage.Persons.Where(exp);
        }

        public Person Update(Person person)
        {
            var id = person.id;

            var updatePerson = Select(e => e.id == id).FirstOrDefault();
            
            if (updatePerson == null)
                throw new ArgumentNullException(string.Format("Could not find Person with id: {0}", id));

            updatePerson.CopyFrom(person);
            

            return updatePerson;
        }

        public void Delete(int id)
        {
            var updatePerson = Select(e => e.id == id).FirstOrDefault();

            if (updatePerson == null)
                throw new ArgumentNullException(string.Format("Could not find Person with id: {0}", id));

            PersonDataStorage.Persons.Remove(updatePerson);
        }

        public void Add(Person person)
        {
            var id = person.id;

            var updatePerson = Select(e => e.id == id).FirstOrDefault();

            if (updatePerson != null)
                throw new InvalidOperationException(string.Format("Person with id: {0} already exists", id));

            PersonDataStorage.Persons.Add(person);
        }
    }
}