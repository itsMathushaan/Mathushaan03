using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using TOnboardEMS.Model;

namespace TOnboardEMS.Repository
{
    public class LoginRepository
    {
    }
    public List<Login> FindAll(Expression<Func<Login, bool>> predicate, OnboardContext context)
    {
        var results = context.Employee.Where(predicate).ToList();
        return results;

    }
}
