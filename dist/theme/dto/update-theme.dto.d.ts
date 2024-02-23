export declare class HeaderDto {
    logo: string;
    favicon: string;
    links: string[];
    products: string[];
    pages: string[];
    categories: string[];
}
export declare class FooterDto {
    title: string;
    type: string;
    links: string[];
    products: string[];
    categories: string[];
    pages: string[];
}
export declare class SectionDto {
    title: string;
    type: string;
    view: string;
    subtitle: string;
    products: string[];
    categories: string[];
    brands: object[];
    squareBanners: object[];
    landscapeBanners: object[];
    index: number;
    active: boolean;
}
export declare class ColorDto {
    primary: string;
    secondary: string;
    primaryfont: object;
    secondaryfont: object[];
    colors: object;
}
export declare class UpdateThemeDto {
    channel: string;
    storeId: string;
    header: HeaderDto;
    footer: FooterDto[];
    sections: SectionDto[];
    colors: ColorDto;
    font: object;
}
