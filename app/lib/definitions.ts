export type User = {
    id: string,
    name: string,
    role: string,
    email: string,
    password: string,
    date_time: Date,

};

export type Article = {
    author_id: string,
    title: string,
    subtitle: string,
    category_id: string,
    subcategory_id: string,
    media: File,
    media_url: string,
    content: string,
    slug: string,
    page: string,
    section: string,
    date_time: Date,
}

type Tag =  {
  news_id: string;
  tag_id: string;
};

export type NewsData = {
    id: string,
    title: string,
    kktitle: string,
    rutitle: string,
    subtitle: string,
    kksubtitle: string,
    rusubtitle: string,
    author_name: string,
    category_id: string,
    category_name: string,
    subcategory_id: string,
    subcategory_name: string,
    image_url: string,
    content: string,
    kkcontent: string,
    rucontent: string,
    slug: string,
    section: string,
    newsTags: Tag[],
    date_time: Date,
}

export type AuthorData = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  biography: string;

};

export type CategoryData = {
  category_id: string;
  category_name: string;
  subcategory_name: string;
};

export type TagData = {
  id: string;
  name: string;
  slug: string;
  image_url: string;
};

export type QuestionData = {
  id: string;
  qdetail: string;
  option1: string;
  option2: string;
  option3: string;
  correct: string;

};

export type WeatherData = {
  temperature: number;
  city: string;
  country: string;
}