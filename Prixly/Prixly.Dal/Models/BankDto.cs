namespace Prixly.Dal.Models
{
    public class BankDto
    {
        public Guid Guid { get; set; }

        public string Name { get; set; } = string.Empty;

        public string? Description { get; set; }

        public BankDetailsDto BankDetailsDto { get; set; } = new BankDetailsDto();
    }
}