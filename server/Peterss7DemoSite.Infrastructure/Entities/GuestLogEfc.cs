using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PeterssDemoSite.Infrastructure.Entities;

public class GuestLogEfc
{
    [Key]
    public Guid ObjectKey { get; set;}
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int GuestLogId { get; set; }
    [Required]
    [MaxLength(256)]
    public string Message { get; set; } = string.Empty;
}
