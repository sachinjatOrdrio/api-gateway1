import { ApiProperty } from '@nestjs/swagger';

export class HeaderDto {
  @ApiProperty()
  logo: string;

  @ApiProperty()
  favicon: string;

  @ApiProperty({ type: [String], isArray: true })
  links: string[];

  @ApiProperty({ type: [String], isArray: true })
  products: string[];

  @ApiProperty({ type: [String], isArray: true })
  pages: string[];

  @ApiProperty({ type: [String], isArray: true })
  categories: string[];
}

export class FooterDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  type: string;

  @ApiProperty({ type: [String], isArray: true })
  links: string[];

  @ApiProperty({ type: [String], isArray: true })
  products: string[];

  @ApiProperty({ type: [String], isArray: true })
  categories: string[];

  @ApiProperty({ type: [String], isArray: true })
  pages: string[];
}

export class SectionDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  type: string;

  @ApiProperty()
  view: string;

  @ApiProperty()
  subtitle: string;

  @ApiProperty({ type: [String], isArray: true })
  products: string[];

  @ApiProperty({ type: [String], isArray: true })
  categories: string[];

  @ApiProperty({ type: [Object], isArray: true })
  brands: object[];

  @ApiProperty({ type: [Object], isArray: true })
  squareBanners: object[];

  @ApiProperty({ type: [Object], isArray: true })
  landscapeBanners: object[];

  @ApiProperty()
  index: number;

  @ApiProperty()
  active: boolean;
}

export class ColorDto {
  @ApiProperty()
  primary: string;

  @ApiProperty()
  secondary: string;

  @ApiProperty()
  primaryfont: object;

  @ApiProperty({ type: [Object], isArray: true })
  secondaryfont: object[];

  @ApiProperty()
  colors: object;
}

export class CreateThemeDto {
  @ApiProperty()
  channel: string;

  @ApiProperty()
  storeId: string;

  @ApiProperty({ type: HeaderDto })
  header: HeaderDto;

  @ApiProperty({ type: [FooterDto], isArray: true })
  footer: FooterDto[];

  @ApiProperty({ type: [SectionDto], isArray: true })
  sections: SectionDto[];

  @ApiProperty({ type: ColorDto })
  colors: ColorDto;

  @ApiProperty()
  font: object;
}
