using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Prixly.Dal.Models
{
    public class UserProfileDto
    {
        public Guid Guid { get; set; }
        public string Email { get; set; }
        public List<CreditCardDto> OwnedCards { get; set; } = new();
    }
}