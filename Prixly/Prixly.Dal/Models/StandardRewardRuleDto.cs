using Prixly.Dal.Enums;

namespace Prixly.Dal.Models
{
    public class StandardRewardRuleDto
    {
        public MerchantCategoryCode Category { get; set; }
        public BonusType BonusType { get; set; } // Points, Miles, Cashback
        public decimal Multiplier { get; set; }  // e.g., 3.0 for 3x points
    }
}