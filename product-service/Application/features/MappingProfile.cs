using Application.common.DTOs;
using AutoMapper;
using Domain.entities;

namespace Application.features
{
    public class MappingProfile: Profile
    {
        public MappingProfile()
        {
            CreateMap<Products, ProductsDto>();
            CreateMap<Files, FilesDto>();
        }
    }
}