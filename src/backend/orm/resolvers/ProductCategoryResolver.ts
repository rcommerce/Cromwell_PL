import { Resolver, Query, Mutation, Arg, FieldResolver, Root } from "type-graphql";
import { ProductCategory } from "../models/entities/ProductCategory";
import { CreateProductCategory } from "../models/inputs/CreateProductCategory";
import { UpdateProductCategory } from "../models/inputs/UpdateProductCategory";
import { PagedParamsInput } from "../models/inputs/PagedParamsInput";
import { ProductCategoryRepository } from "../repositories/ProductCategoryRepository";
import { ProductRepository } from "../repositories/ProductRepository";
import { getCustomRepository } from "typeorm";
import { ProductType } from "@cromwell/core";
import { Product } from "../models/entities/Product";


@Resolver(ProductCategory)
export class ProductCategoryResolver {

    private get repo() { return getCustomRepository(ProductCategoryRepository) }

    @Query(() => [ProductCategory])
    async productCategories() {
        return await this.repo.getProductCategories();
    }

    @Query(() => ProductCategory)
    async productCategory(@Arg("slug") slug: string) {
        return await this.repo.getProductCategoryBySlug(slug);
    }

    @Query(() => ProductCategory)
    async getProductCategoryById(@Arg("id") id: string) {
        return await this.repo.getProductCategoryById(id);
    }

    @Mutation(() => ProductCategory)
    async createProductCategory(@Arg("data") data: CreateProductCategory) {
        return await this.repo.createProductCategory(data);
    }

    @Mutation(() => ProductCategory)
    async updateProductCategory(@Arg("id") id: string, @Arg("data") data: UpdateProductCategory) {
        return await this.repo.updateProductCategory(id, data);
    }

    @Mutation(() => Boolean)
    async deleteProductCategory(@Arg("id") id: string) {
        return await this.repo.deleteProductCategory(id);
    }

    @FieldResolver(() => [Product])
    async products(@Root() productCategory: ProductCategory, @Arg("pagedParams") pagedParams: PagedParamsInput<ProductType>): Promise<ProductType[]> {
        
        return await getCustomRepository(ProductRepository).getProductsFromCategory(productCategory.id, pagedParams);
    }


    @FieldResolver()
    views(): number {
        return Math.floor(Math.random() * 10);
    }
}