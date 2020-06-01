import { DBEntity, GraphQLNode } from './types';

export const GraphQLPaths: { [K in DBEntity]: GraphQLNode } = {
    Post: {
        getOneBySlug: "post",
        getOneById: "getPostById",
        getAll: "posts",
        create: "createPost",
        update: "updatePost",
        delete: "deletePost"
    },
    Product: {
        getOneBySlug: "product",
        getOneById: "getProductById",
        getAll: "products",
        create: "createProduct",
        update: "updateProduct",
        delete: "deleteProduct"
    },
    ProductCategory: {
        getOneBySlug: "productCategory",
        getOneById: "getProductCategoryById",
        getAll: "productCategories",
        create: "createProductCategory",
        update: "updateProductCategory",
        delete: "deleteProductCategory"
    }
}

export const DBTableNames: { [K in DBEntity]: string} = {
    Post: 'post',
    Product: 'product',
    ProductCategory: 'product_category'
}

export const componentsCachePath = '/tmp/components';