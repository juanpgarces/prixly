using Prixly.Dal.Enums;

namespace Prixly.Dal.Models
{
    public class TransactionLogDto
    {
        public Guid Guid { get; set; }
        public Guid UserGuid { get; set; }
        public DateTime Timestamp { get; set; }
        public decimal Amount { get; set; }
        public MerchantCategoryCode Category { get; set; }
        public CreditCardDto SelectedCard { get; set; }
        public decimal EarnedReward { get; set; }
    }
}