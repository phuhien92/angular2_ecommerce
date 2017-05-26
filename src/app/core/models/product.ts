export class Product {
    id: number;
    name: string;
    description: string;
    price: string;
    display_price: string;
    available_on: string;
    slug: string;

    //meta title: string
    meta_description: string;
    meta_keywords: string;
    shipping_category_id: number;
    taxon_ids: number[];
    total_on_hand: number;
    has_variants: boolean;
}