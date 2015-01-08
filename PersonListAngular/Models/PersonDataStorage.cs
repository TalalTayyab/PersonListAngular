using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MvcApp2.Models
{
    public class PersonDataStorage
    {
        static List<Person> persons = null;
        public static List<Person> Persons
        {
            get
            {
                if (persons == null)
                    persons = GenerateData();

                return persons;
            }

            private set
            {
                persons = value;
            }
        }

      

        static List<Person> GenerateData()
        {
            List<Person> persons = new List<Person>();

            for (int i = 0; i < 10;i++)
            {
                Person p = new Person();
                p.id = (i + 1);
                p.name = "Person " + p.id;
                p.employed = false;

                persons.Add(p);
            }
              


            return persons;

        }
    }
}