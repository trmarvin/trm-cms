import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksBookListItem extends Struct.ComponentSchema {
  collectionName: 'components_blocks_book_list_items';
  info: {
    displayName: 'Book List Item';
    icon: 'book';
  };
  attributes: {
    annotation: Schema.Attribute.RichText;
    biblio: Schema.Attribute.RichText & Schema.Attribute.Required;
    book_cover_img: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
  };
}

export interface BlocksEmbed extends Struct.ComponentSchema {
  collectionName: 'components_blocks_embeds';
  info: {
    displayName: 'Embed';
    icon: 'landscape';
  };
  attributes: {
    provider: Schema.Attribute.Enumeration<
      ['YouTube', 'Vimeo', 'Soundcloud', 'Map', 'Custom']
    >;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface BlocksImageWithCaption extends Struct.ComponentSchema {
  collectionName: 'components_blocks_image_with_captions';
  info: {
    displayName: 'Image with caption';
    icon: 'picture';
  };
  attributes: {
    alt: Schema.Attribute.String & Schema.Attribute.Required;
    caption: Schema.Attribute.RichText;
    credit: Schema.Attribute.RichText;
    display: Schema.Attribute.Enumeration<
      ['full', 'wide', 'float-left', 'float-right']
    > &
      Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface BlocksParagraph extends Struct.ComponentSchema {
  collectionName: 'components_blocks_paragraphs';
  info: {
    displayName: 'Paragraph';
    icon: 'write';
  };
  attributes: {
    text_md: Schema.Attribute.RichText;
  };
}

export interface BlocksQuote extends Struct.ComponentSchema {
  collectionName: 'components_blocks_quotes';
  info: {
    displayName: 'Quote';
    icon: 'quote';
  };
  attributes: {
    quote_md: Schema.Attribute.RichText;
    source: Schema.Attribute.RichText;
    thinkers: Schema.Attribute.Relation<'oneToMany', 'api::thinker.thinker'>;
  };
}

export interface SharedCuratedSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_curated_sections';
  info: {
    displayName: 'curated_section';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    display: Schema.Attribute.Enumeration<
      ['cards', 'list', 'grid', 'timeline', 'carousel']
    >;
    manual_essays: Schema.Attribute.Relation<'oneToMany', 'api::essay.essay'>;
    manual_guides: Schema.Attribute.Relation<'oneToMany', 'api::guide.guide'>;
    manual_ideas: Schema.Attribute.Relation<'oneToMany', 'api::idea.idea'>;
    manual_notes: Schema.Attribute.Relation<'oneToMany', 'api::note.note'>;
    manual_resources: Schema.Attribute.Relation<
      'oneToMany',
      'api::resource.resource'
    >;
    manual_thinkers: Schema.Attribute.Relation<
      'oneToMany',
      'api::thinker.thinker'
    >;
    section_type: Schema.Attribute.Enumeration<
      [
        'guides',
        'essays',
        'notes',
        'ideas',
        'thinkers',
        'books',
        'resources',
        'mixed',
      ]
    >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedFeaturedImage extends Struct.ComponentSchema {
  collectionName: 'components_shared_featured_images';
  info: {
    displayName: 'Featured Image';
    icon: 'picture';
  };
  attributes: {
    alt: Schema.Attribute.String & Schema.Attribute.Required;
    aspect: Schema.Attribute.Enumeration<
      ['ration 16:9', 'ratio 3:2', 'ratio 1:1', 'ratio 4:5']
    >;
    caption: Schema.Attribute.Blocks;
    credit: Schema.Attribute.Blocks;
    featured_image: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    focal_x: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          max: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
    focal_y: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          max: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
    hide_featured: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    layout: Schema.Attribute.Enumeration<
      ['banner', 'full-bleed', 'inset', 'none']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'none'>;
    use_as_og: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    external: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSeoMeta extends Struct.ComponentSchema {
  collectionName: 'components_shared_seo_metas';
  info: {
    displayName: 'SEO Meta';
    icon: 'search';
  };
  attributes: {
    canonical: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    noindex: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    seo_image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_links';
  info: {
    displayName: 'Social Link';
    icon: 'emotionHappy';
  };
  attributes: {
    active: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    handle: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images'>;
    order: Schema.Attribute.Integer;
    platform: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface TextTextLocator extends Struct.ComponentSchema {
  collectionName: 'components_text_text_locators';
  info: {
    displayName: 'Text Locator';
    icon: 'folder';
  };
  attributes: {
    book_or_tractate: Schema.Attribute.Relation<'oneToOne', 'api::topic.topic'>;
    corpus: Schema.Attribute.Enumeration<['tanakh', 'talmud']>;
    division: Schema.Attribute.Enumeration<
      [
        'torah',
        'neviim',
        'ketuvim',
        'zeraim',
        'moed',
        'nashim',
        'nezikin',
        'kodashim',
        'toharot',
      ]
    >;
    title_english: Schema.Attribute.String;
    title_he: Schema.Attribute.String;
    unit_name: Schema.Attribute.String;
    unit_type: Schema.Attribute.Enumeration<
      ['parsha', 'mishnah', 'perek', 'daf']
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.book-list-item': BlocksBookListItem;
      'blocks.embed': BlocksEmbed;
      'blocks.image-with-caption': BlocksImageWithCaption;
      'blocks.paragraph': BlocksParagraph;
      'blocks.quote': BlocksQuote;
      'shared.curated-section': SharedCuratedSection;
      'shared.featured-image': SharedFeaturedImage;
      'shared.link': SharedLink;
      'shared.seo-meta': SharedSeoMeta;
      'shared.social-link': SharedSocialLink;
      'text.text-locator': TextTextLocator;
    }
  }
}
