using System;

namespace Core.Entities;

public class Product : BaseEntity
{
    public required string ProductName { get; set; }
    public required string Descriptions { get; set; }
    public decimal Price { get; set; }
    public required string ImageUrl { get; set; }
    public required string Type { get; set; }
    public required string Brand { get; set; }
    public int QuantityInStock { get; set; }

}


