using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MvcApp2.Models
{
    public class Person
    {
        public int id { get; set; }
        public string name { get; set; }
        public bool employed { get; set; }

        public void CopyFrom(Person p)
        {
            this.id = p.id;
            this.name = p.name;
            this.employed = p.employed;
        }
    }
}