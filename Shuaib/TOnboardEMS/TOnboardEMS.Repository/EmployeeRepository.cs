using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using TOnboardEMS.Model;
using TOnboardEMS.Repository.Interfaces;

namespace TOnboardEMS.Repository
{
    public class EmployeeRepository : BaseRepository<Employee>, IEmployeeRepository
    {
        public EmployeeRepository(OnboardContext context) : base(context)
        { 
        }
        public List<Employee> FindAll(Expression<Func<Employee, bool>> predicate, OnboardContext context)
        {
            var results = context.Employee.Where(predicate).ToList();
            return results;
        }
    }

}
