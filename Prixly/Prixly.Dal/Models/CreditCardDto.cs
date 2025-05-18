namespace Prixly.Dal.Models
{
    public class CreditCardDto
    {
        public Guid Guid { get; set; }

        public string Name { get; set; } = string.Empty;

        public string Description { get; set; } = string.Empty;

        public Guid BankGuid { get; set; }

        public string ImageUrl { get; set; } = string.Empty;

        public bool IsActive { get; set; } = true;

        public List<CustomRewardRuleDto> CustomRewardRules { get; set; } = new List<CustomRewardRuleDto>();
        public List<StandardRewardRuleDto> StandardRewardRules { get; set; } = new List<StandardRewardRuleDto>();
    }
}