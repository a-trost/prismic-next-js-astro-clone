// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for Navigation documents */
interface NavigationDocumentData {
    /**
     * Links field in *Navigation*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation.links[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    links: prismicT.GroupField<Simplify<NavigationDocumentDataLinksItem>>;
}
/**
 * Item in Navigation → Links
 *
 */
export interface NavigationDocumentDataLinksItem {
    /**
     * Label field in *Navigation → Links*
     *
     * - **Field Type**: Title
     * - **Placeholder**: Optional - Label for the link
     * - **API ID Path**: navigation.links[].label
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    label: prismicT.TitleField;
    /**
     * Link field in *Navigation → Links*
     *
     * - **Field Type**: Link
     * - **Placeholder**: Link for navigation item
     * - **API ID Path**: navigation.links[].link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link: prismicT.LinkField;
}
/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<NavigationDocumentData>, "navigation", Lang>;
/** Content for Page documents */
interface PageDocumentData {
    /**
     * Title field in *Page*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: page.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Parent field in *Page*
     *
     * - **Field Type**: Content Relationship
     * - **Placeholder**: *None*
     * - **API ID Path**: page.parent
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    parent: prismicT.RelationField<"page">;
    /**
     * Slice Zone field in *Page*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: page.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<PageDocumentDataSlicesSlice>;
}
/**
 * Slice for *Page → Slice Zone*
 *
 */
type PageDocumentDataSlicesSlice = HeroSlice | LogoCloudSlice | SponsorGridSlice;
/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;
/** Content for Settings documents */
interface SettingsDocumentData {
    /**
     * Site Title field in *Settings*
     *
     * - **Field Type**: Title
     * - **Placeholder**: Title of the site
     * - **API ID Path**: settings.siteTitle
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    siteTitle: prismicT.TitleField;
}
/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<SettingsDocumentData>, "settings", Lang>;
export type AllDocumentTypes = NavigationDocument | PageDocument | SettingsDocument;
/**
 * Primary content in Hero → Primary
 *
 */
interface HeroSliceDefaultPrimary {
    /**
     * Eyebrow Badge Text field in *Hero → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: hero.primary.eyebrowBadge
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    eyebrowBadge: prismicT.KeyTextField;
    /**
     * Eyebrow URL field in *Hero → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: hero.primary.eyebrowURL
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    eyebrowURL: prismicT.LinkField;
    /**
     * Eyebrow Secondary Text field in *Hero → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: hero.primary.eyebrowSecondaryText
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    eyebrowSecondaryText: prismicT.KeyTextField;
    /**
     * Heading field in *Hero → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: hero.primary.heading
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    heading: prismicT.TitleField;
    /**
     * Body field in *Hero → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: hero.primary.body
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    body: prismicT.RichTextField;
    /**
     * Button Text field in *Hero → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: hero.primary.buttonText
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    buttonText: prismicT.KeyTextField;
    /**
     * Button Link field in *Hero → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: hero.primary.buttonLink
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    buttonLink: prismicT.LinkField;
}
/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Hero`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<HeroSliceDefaultPrimary>, never>;
/**
 * Slice variation for *Hero*
 *
 */
type HeroSliceVariation = HeroSliceDefault;
/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: `Hero`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroSlice = prismicT.SharedSlice<"hero", HeroSliceVariation>;
/**
 * Primary content in Image → Primary
 *
 */
interface ImageSliceDefaultPrimary {
    /**
     * Image field in *Image → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: image.primary.image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
}
/**
 * Default variation for Image Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Image`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<ImageSliceDefaultPrimary>, never>;
/**
 * Primary content in Image → Primary
 *
 */
interface ImageSliceBannerPrimary {
    /**
     * Image field in *Image → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: image.primary.image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
}
/**
 * Banner variation for Image Slice
 *
 * - **API ID**: `banner`
 * - **Description**: `Image`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageSliceBanner = prismicT.SharedSliceVariation<"banner", Simplify<ImageSliceBannerPrimary>, never>;
/**
 * Slice variation for *Image*
 *
 */
type ImageSliceVariation = ImageSliceDefault | ImageSliceBanner;
/**
 * Image Shared Slice
 *
 * - **API ID**: `image`
 * - **Description**: `Image`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageSlice = prismicT.SharedSlice<"image", ImageSliceVariation>;
/**
 * Primary content in ImageCards → Primary
 *
 */
interface ImageCardsSliceDefaultPrimary {
    /**
     * Heading field in *ImageCards → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: image_cards.primary.heading
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    heading: prismicT.RichTextField;
}
/**
 * Item in ImageCards → Items
 *
 */
export interface ImageCardsSliceDefaultItem {
    /**
     * Image field in *ImageCards → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: image_cards.items[].image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * Text field in *ImageCards → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: image_cards.items[].text
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    text: prismicT.RichTextField;
    /**
     * Button Link field in *ImageCards → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: image_cards.items[].buttonLink
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    buttonLink: prismicT.LinkField;
    /**
     * Button Text field in *ImageCards → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: image_cards.items[].buttonText
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    buttonText: prismicT.KeyTextField;
}
/**
 * Default variation for ImageCards Slice
 *
 * - **API ID**: `default`
 * - **Description**: `ImageCards`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageCardsSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<ImageCardsSliceDefaultPrimary>, Simplify<ImageCardsSliceDefaultItem>>;
/**
 * Slice variation for *ImageCards*
 *
 */
type ImageCardsSliceVariation = ImageCardsSliceDefault;
/**
 * ImageCards Shared Slice
 *
 * - **API ID**: `image_cards`
 * - **Description**: `ImageCards`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageCardsSlice = prismicT.SharedSlice<"image_cards", ImageCardsSliceVariation>;
/**
 * Primary content in LogoCloud → Primary
 *
 */
interface LogoCloudSliceDefaultPrimary {
    /**
     * Heading field in *LogoCloud → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: logo_cloud.primary.heading
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    heading: prismicT.KeyTextField;
}
/**
 * Item in LogoCloud → Items
 *
 */
export interface LogoCloudSliceDefaultItem {
    /**
     * Company Logo field in *LogoCloud → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: logo_cloud.items[].companyLogo
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    companyLogo: prismicT.ImageField<never>;
}
/**
 * Default variation for LogoCloud Slice
 *
 * - **API ID**: `default`
 * - **Description**: `LogoCloud`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type LogoCloudSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<LogoCloudSliceDefaultPrimary>, Simplify<LogoCloudSliceDefaultItem>>;
/**
 * Slice variation for *LogoCloud*
 *
 */
type LogoCloudSliceVariation = LogoCloudSliceDefault;
/**
 * LogoCloud Shared Slice
 *
 * - **API ID**: `logo_cloud`
 * - **Description**: `LogoCloud`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type LogoCloudSlice = prismicT.SharedSlice<"logo_cloud", LogoCloudSliceVariation>;
/**
 * Primary content in Quote → Primary
 *
 */
interface QuoteSliceDefaultPrimary {
    /**
     * Quote field in *Quote → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: quote.primary.quote
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    quote: prismicT.RichTextField;
    /**
     * Source field in *Quote → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: quote.primary.source
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    source: prismicT.KeyTextField;
}
/**
 * Default variation for Quote Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Quote`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type QuoteSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<QuoteSliceDefaultPrimary>, never>;
/**
 * Slice variation for *Quote*
 *
 */
type QuoteSliceVariation = QuoteSliceDefault;
/**
 * Quote Shared Slice
 *
 * - **API ID**: `quote`
 * - **Description**: `Quote`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type QuoteSlice = prismicT.SharedSlice<"quote", QuoteSliceVariation>;
/**
 * Primary content in SponsorGrid → Primary
 *
 */
interface SponsorGridSliceDefaultPrimary {
    /**
     * Top Copy field in *SponsorGrid → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: sponsor_grid.primary.topCopy
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    topCopy: prismicT.KeyTextField;
    /**
     * Bottom Copy field in *SponsorGrid → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: sponsor_grid.primary.bottomCopy
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    bottomCopy: prismicT.KeyTextField;
}
/**
 * Item in SponsorGrid → Items
 *
 */
export interface SponsorGridSliceDefaultItem {
    /**
     * Sponsor Link field in *SponsorGrid → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: sponsor_grid.items[].sponsorLink
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    sponsorLink: prismicT.LinkField;
    /**
     * Logo field in *SponsorGrid → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: sponsor_grid.items[].logo
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    logo: prismicT.ImageField<never>;
    /**
     * Optional Text field in *SponsorGrid → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: sponsor_grid.items[].optionalText
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    optionalText: prismicT.KeyTextField;
}
/**
 * Default variation for SponsorGrid Slice
 *
 * - **API ID**: `default`
 * - **Description**: `SponsorGrid`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SponsorGridSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<SponsorGridSliceDefaultPrimary>, Simplify<SponsorGridSliceDefaultItem>>;
/**
 * Slice variation for *SponsorGrid*
 *
 */
type SponsorGridSliceVariation = SponsorGridSliceDefault;
/**
 * SponsorGrid Shared Slice
 *
 * - **API ID**: `sponsor_grid`
 * - **Description**: `SponsorGrid`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SponsorGridSlice = prismicT.SharedSlice<"sponsor_grid", SponsorGridSliceVariation>;
/**
 * Primary content in Text → Primary
 *
 */
interface TextSliceDefaultPrimary {
    /**
     * Text field in *Text → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: text.primary.text
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    text: prismicT.RichTextField;
}
/**
 * Default variation for Text Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Text`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<TextSliceDefaultPrimary>, never>;
/**
 * Primary content in Text → Primary
 *
 */
interface TextSliceTwoColumnsPrimary {
    /**
     * Text field in *Text → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: text.primary.text
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    text: prismicT.RichTextField;
}
/**
 * Two Columns variation for Text Slice
 *
 * - **API ID**: `twoColumns`
 * - **Description**: `Text`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextSliceTwoColumns = prismicT.SharedSliceVariation<"twoColumns", Simplify<TextSliceTwoColumnsPrimary>, never>;
/**
 * Slice variation for *Text*
 *
 */
type TextSliceVariation = TextSliceDefault | TextSliceTwoColumns;
/**
 * Text Shared Slice
 *
 * - **API ID**: `text`
 * - **Description**: `Text`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextSlice = prismicT.SharedSlice<"text", TextSliceVariation>;
/**
 * Primary content in TextWithImage → Primary
 *
 */
interface TextWithImageSliceDefaultPrimary {
    /**
     * Text field in *TextWithImage → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: text_with_image.primary.text
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    text: prismicT.RichTextField;
    /**
     * Image field in *TextWithImage → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: text_with_image.primary.image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
}
/**
 * Default variation for TextWithImage Slice
 *
 * - **API ID**: `default`
 * - **Description**: `TextWithImage`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextWithImageSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<TextWithImageSliceDefaultPrimary>, never>;
/**
 * Primary content in TextWithImage → Primary
 *
 */
interface TextWithImageSliceWithButtonPrimary {
    /**
     * Text field in *TextWithImage → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: text_with_image.primary.text
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    text: prismicT.RichTextField;
    /**
     * Button Link field in *TextWithImage → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: text_with_image.primary.buttonLink
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    buttonLink: prismicT.LinkField;
    /**
     * Button Text field in *TextWithImage → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: text_with_image.primary.buttonText
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    buttonText: prismicT.KeyTextField;
    /**
     * Image field in *TextWithImage → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: text_with_image.primary.image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
}
/**
 * With Button variation for TextWithImage Slice
 *
 * - **API ID**: `withButton`
 * - **Description**: `TextWithImage`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextWithImageSliceWithButton = prismicT.SharedSliceVariation<"withButton", Simplify<TextWithImageSliceWithButtonPrimary>, never>;
/**
 * Slice variation for *TextWithImage*
 *
 */
type TextWithImageSliceVariation = TextWithImageSliceDefault | TextWithImageSliceWithButton;
/**
 * TextWithImage Shared Slice
 *
 * - **API ID**: `text_with_image`
 * - **Description**: `TextWithImage`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextWithImageSlice = prismicT.SharedSlice<"text_with_image", TextWithImageSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { NavigationDocumentData, NavigationDocumentDataLinksItem, NavigationDocument, PageDocumentData, PageDocumentDataSlicesSlice, PageDocument, SettingsDocumentData, SettingsDocument, AllDocumentTypes, HeroSliceDefaultPrimary, HeroSliceDefault, HeroSliceVariation, HeroSlice, ImageSliceDefaultPrimary, ImageSliceDefault, ImageSliceBannerPrimary, ImageSliceBanner, ImageSliceVariation, ImageSlice, ImageCardsSliceDefaultPrimary, ImageCardsSliceDefaultItem, ImageCardsSliceDefault, ImageCardsSliceVariation, ImageCardsSlice, LogoCloudSliceDefaultPrimary, LogoCloudSliceDefaultItem, LogoCloudSliceDefault, LogoCloudSliceVariation, LogoCloudSlice, QuoteSliceDefaultPrimary, QuoteSliceDefault, QuoteSliceVariation, QuoteSlice, SponsorGridSliceDefaultPrimary, SponsorGridSliceDefaultItem, SponsorGridSliceDefault, SponsorGridSliceVariation, SponsorGridSlice, TextSliceDefaultPrimary, TextSliceDefault, TextSliceTwoColumnsPrimary, TextSliceTwoColumns, TextSliceVariation, TextSlice, TextWithImageSliceDefaultPrimary, TextWithImageSliceDefault, TextWithImageSliceWithButtonPrimary, TextWithImageSliceWithButton, TextWithImageSliceVariation, TextWithImageSlice };
    }
}
