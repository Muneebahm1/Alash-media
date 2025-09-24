
const users = [
    {
        name: 'Syed Tayab Raza',
        role: 'Admin',
        email: 'taiyyib.iiui@gmail.com',
        password: '51214',
        date_time: '2025-06-11 13:15:52',
    },
];
const authors = [
    {
    id: '7253d754-c9d3-4cc7-9b0b-9ec953717870',
    name: 'Syed',
    email: 'syed@gmail.com',
    image_url: '/images/authors/syed.png',
    biography: `Syed is creative writer and specialized in
    sports news`,
    },
    {
    id: 'b4b32b17-78e0-4258-99cf-379f81e66c0a',
    name: 'Tayab',
    email: 'tayab@gmail.com',
    image_url: '/images/authors/tayab.png',
    biography: `Tayab is content creator and specialized in
    current affairs`,
    },
    {
    id: '890fa608-166f-412a-a5b5-aa64b8184b81',
    name: 'Raza',
    email: 'raza@gmail.com',
    image_url: '/images/authors/raza.png',
    biography: `Raza is active journalist and specialized in
    interviewing famous policians`,
    },
];
const categories = [
    {
    category_id: '4ff7db1a-30a5-4b45-a051-73130aacbf02',
    category_name: 'Informational',
    },
    {
    category_id: 'f75421f5-63e7-4575-a63c-cb96db368844',
    category_name: 'Educational',
    },
    {
    category_id: 'fbcea20e-70b4-4f0d-bd5f-55755b2937ae',
    category_name: 'Biography',
    },
    {
    category_id: '9d3d2581-91b3-4f41-b9a6-c4a528df47f1',
    category_name: 'Alash',
    },
    {
    category_id: '9b1faa0a-8fe7-4b80-816e-f3078ba10318',
    category_name: 'Media',
    },
    {
    category_id: '7645ae9e-8f99-4824-8971-6b6609f7c7cf',
    category_name: 'Special Project',
    },
];
const subcategories = [
    {
    subcategory_id: '5c86f42c-9c45-41e1-9782-32a6e4982e13',
    subcategory_name: 'Sports',
    category_id: categories[0].category_id,
    },
    {
    subcategory_id: '17dbe0b9-fc54-427f-b9ce-2a0a441f997b',
    subcategory_name: 'Politics',
    category_id: categories[0].category_id,
    },

];
const news = [
    {
        id: 'c655650e-b008-466d-b663-36dcc659d5d2',
        author_id: authors[0].id,
        category_id: categories[0].category_id,
        subcategory_id: subcategories[0].subcategory_id,
        title: `Fusce gravida ullamcorper rutrum. Aenean rutrum nibh ipsum,
         at vehicula arcu sagittis non. Quisque accumsan sagittis libero,
         sit amet aliquet nunc aliquam vitae.`,
        subtitle: `subtitle goes here gravida ullamcorper rutrum. Aenean rutrum nibh ipsum,
         at vehicula arcu sagittis non. Quisque accumsan sagittis libero,
         sit amet aliquet nunc aliquam vitae.`,
        image_url: '/images/hero top news/news1.png',
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras felis sem, consectetur sit amet lorem ut, consequat aliquam nunc. Aliquam dignissim tellus ex, vel imperdiet dolor interdum sit amet. Cras porttitor consectetur lectus et ullamcorper. Sed gravida sapien in ante pretium, vitae molestie libero malesuada. Sed mollis consectetur est, eget volutpat nisl bibendum sit amet. Aliquam euismod eget lectus quis dapibus. Nunc vel ligula eget orci viverra iaculis eu quis ante. In sed dictum lectus. Integer id arcu feugiat, vestibulum velit quis, congue lacus.

        Nam consectetur efficitur arcu, in tempus nibh mattis eget. Nunc non dignissim lacus. In imperdiet leo non dolor aliquet rhoncus. Nunc luctus dignissim dolor, ut tempor lorem. Fusce ultricies nisl vel mollis pharetra. Sed quis metus vitae quam mollis mattis id non elit. Ut ultrices nunc eu diam venenatis venenatis eget quis odio. Pellentesque ut odio mi. Integer hendrerit porttitor facilisis. Duis nunc augue, laoreet quis finibus at, pretium sit amet nulla. Integer tempor felis a ligula volutpat, et malesuada ex iaculis. Vestibulum porta sapien sit amet viverra semper. Nulla eu urna a nunc gravida semper. Donec eu quam id tortor feugiat pharetra at quis felis. Nullam a bibendum erat, et porttitor sapien.

        Nullam rhoncus pharetra faucibus. Integer imperdiet quam lacus, eu rhoncus est consequat ac. Curabitur nisl massa, euismod nec lorem ac, venenatis laoreet elit. Curabitur interdum dignissim turpis, vitae iaculis nunc maximus at. Fusce vitae sagittis dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras cursus et sem at pulvinar. Maecenas vitae enim vitae ipsum rhoncus dapibus. Etiam aliquam ex at elit luctus iaculis sit amet non enim.

        Sed bibendum, mauris at lacinia finibus, sapien ante dignissim justo, id placerat ligula libero et elit. Fusce in elementum massa. Aenean ornare nisi nisl, quis porta ex accumsan eget. Sed suscipit neque vitae augue ultricies pellentesque. Ut at magna suscipit, imperdiet magna a, lacinia lectus. Integer posuere tempus lobortis. Curabitur tincidunt ex eu libero lacinia, sed maximus odio efficitur. Etiam tincidunt vitae nunc a ultrices. Vivamus tincidunt aliquam dolor, vitae euismod velit tincidunt in.

        Etiam aliquam id libero ut molestie. Aliquam feugiat efficitur lectus, ac gravida ipsum eleifend at. Morbi vehicula ullamcorper fringilla. Maecenas non turpis condimentum, varius orci id, sodales massa. Maecenas ultrices turpis dolor. In ultricies purus sit amet purus sagittis, ut aliquam lacus consectetur. Etiam at arcu ut odio consectetur efficitur.`,
        slug: 'fusce-gravida-ullamcorper-rutrum',
        section: 'Trending Topics',
        view_count: 0,
        read_time: 0,
        date_time: '2025-06-12 10:10:00',
    },
    {
        id: '865b83f8-ba3e-43f8-adf6-845b4947b400',
        author_id: authors[2].id,
        category_id: categories[0].category_id,
        subcategory_id: subcategories[1].subcategory_id,
        title: `Duis et fringilla dui, eget fermentum neque. 
        Praesent rutrum sed felis eu tincidunt. 
        Praesent pulvinar nisl nunc`,
        subtitle: `Subtitle goes here Duis et fringilla dui, eget fermentum neque. 
        Praesent rutrum sed felis eu tincidunt. 
        Praesent pulvinar nisl nunc`,
        image_url: '/images/top news/news2.png',
        content: `Integer et felis eu nisl gravida vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum finibus dolor nec mollis. Aliquam a gravida sapien. Donec rhoncus elit nec velit maximus porttitor. Aenean at tempus orci. Nullam at ante molestie, faucibus magna eget, ultrices nisl. Mauris eleifend, lectus sit amet malesuada auctor, velit magna consectetur quam, quis commodo orci ante ut est. Phasellus nulla ligula, imperdiet eget tellus id, volutpat congue orci. Fusce posuere velit eu ultricies molestie. Cras dignissim nulla sit amet metus faucibus dapibus. Ut vulputate semper pulvinar.

Maecenas commodo leo non ex finibus suscipit. Vestibulum turpis lorem, egestas sit amet augue vel, vehicula pellentesque ante. Fusce vitae lectus nisi. Morbi at laoreet augue, nec rutrum augue. Fusce quis lacinia elit, a elementum lacus. Phasellus pharetra, nulla vel ultricies suscipit, ligula tortor gravida mauris, malesuada iaculis massa orci non nulla. Aliquam sodales et dolor id egestas. Sed enim nisi, porttitor nec congue vel, egestas et nunc. Vivamus pellentesque, tortor in ultricies suscipit, lectus orci maximus urna, at fermentum magna augue eu massa. Nunc a urna porta, blandit magna et, aliquam turpis. Proin tincidunt lacus non consequat aliquam. Sed est felis, gravida rutrum dui nec, pulvinar ornare turpis. Maecenas vitae metus vel lectus dapibus pharetra ac in magna. Sed accumsan purus sapien, quis vulputate enim lacinia sit amet. Quisque commodo elit vel mattis interdum. Curabitur accumsan libero nisl, quis venenatis tellus eleifend at.

Morbi facilisis erat elit, a porta ligula iaculis sit amet. Proin ullamcorper diam id dolor hendrerit, nec hendrerit est sodales. Ut dictum lacinia fermentum. Phasellus vel volutpat purus, eget ultricies metus. Nullam velit erat, fringilla eu felis non, faucibus faucibus odio. Duis quis felis sapien. Proin maximus fringilla lacus eu pharetra. Nullam quis tortor iaculis, interdum mauris maximus, lacinia turpis. Nunc vel facilisis sem, nec pretium magna. Nam scelerisque nulla gravida, maximus dolor ut, tempus mauris. Quisque pulvinar enim sed pellentesque finibus. Curabitur consequat massa at ultrices euismod.

Phasellus tempus aliquam ante, in fringilla diam posuere id. Phasellus ultricies enim eget sem imperdiet maximus. Maecenas pulvinar posuere purus a porta. In eget iaculis quam. Nam ut vehicula diam, in finibus purus. Sed malesuada hendrerit blandit. Etiam lobortis nibh quis tortor consectetur sagittis. Vestibulum in congue massa, quis convallis ante. Nulla lobortis, justo vitae dictum suscipit, ipsum orci sodales mi, non posuere tortor dui quis tellus. Proin at malesuada metus, at cursus est. Morbi faucibus enim quis nisl eleifend, quis ultricies tortor faucibus. Mauris lectus tortor, aliquet in gravida suscipit, venenatis quis dui.

Aliquam erat volutpat. Nam quis auctor nibh. Phasellus magna leo, luctus pharetra euismod nec, placerat eu nibh. Phasellus vulputate risus dolor, eget posuere diam congue ac. Quisque rhoncus mauris eu consectetur efficitur. Ut id nisi at tortor volutpat lobortis in a ante. Nam pretium vulputate nisi ut gravida. Praesent vitae vulputate nibh. Vivamus dictum tellus gravida urna rutrum, ac euismod ante elementum. Morbi posuere metus quis pulvinar tincidunt. Proin vitae arcu eget lectus efficitur sodales ac non lorem. Phasellus bibendum suscipit rutrum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sem massa, dignissim eu libero sed, sagittis placerat dolor. Vestibulum viverra, turpis vel fermentum pulvinar, diam lorem posuere ex, non semper augue diam non velit. Fusce laoreet, odio et tincidunt finibus, diam massa eleifend dui, sit amet eleifend dolor justo id nulla.`,
slug: `duis-et-fringilla-dui-eget-fermentum-neque`,
section: 'Highlights', 
view_count: 0,       
date_time: '2025-06-12 11:10:00',
    },
    {
        id: 'b921ff2d-ffb9-4578-a85d-506ddcc063c8',
        author_id: authors[1].id,
        category_id: categories[2].category_id,
        subcategory_id: subcategories[0].subcategory_id,
        title: `Suspendisse placerat mattis ipsum vel ultricies. 
        Suspendisse potenti. Integer facilisis mi ac eros ornare.`,
        subtitle: `Subtitle goes here Suspendisse placerat mattis ipsum vel ultricies. 
        Suspendisse potenti. Integer facilisis mi ac eros ornare.`,
        image_url: '/images/top news/news3.png', 
        content: `Content of actual news starts from here 
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
`,
        slug: 'suspendisse-placerat-mattis-ipsum-vel-ultricies',
        section: 'Hero Top News',
        view_count: 0,
        date_time: '2025-08-01 11:10:00',
    },
    {
        id: '704861c1-3585-4545-879f-40f62c5ad531',
        author_id: authors[2].id,
        category_id: categories[2].category_id,
        subcategory_id: subcategories[1].subcategory_id,
        title: `Etiam fringilla ac magna in molestie. 
        Phasellus id eros ac metus tincidunt posuere id.`,
        subtitle: `Subtitle goes here Etiam fringilla ac magna in molestie. 
        Phasellus id eros ac metus tincidunt posuere id.`,
        image_url: '/images/top news/news4.png',
        content: `Content of actual news starts from here fringilla nisl egestas, sodales est. In mollis nisl eu nulla tempus egestas in et nibh. Pellentesque posuere lorem vitae lectus dictum volutpat. Curabitur congue ante a orci dictum, ut tincidunt mauris pulvinar. Vivamus pulvinar vel lectus ut finibus. Fusce rhoncus mollis malesuada. Nunc id justo ac arcu pulvinar rhoncus nec a sem. Sed commodo ipsum ante, eu aliquam ipsum tristique quis. Maecenas iaculis nunc quis tempor luctus. In hac habitasse platea dictumst. Nam rhoncus justo eget odio fringilla ornare. Integer dignissim ullamcorper nisl vitae blandit.`,
        slug: 'etiam-fringilla-ac-magna-in-molestie',
        section: 'Top News',
        view_count: 0,
        date_time: '2025-06-20 11:10:00',
    },

];

const translations = [

    {
        id: '8ec8527a-4cb7-4ea3-8e24-01a71f6e5160',
        news_id: news[0].id,
        title: `Vestibulum dolor velit, dapibus eget accumsan molestie, 
        laoreet non justo. Nulla dapibus dolor in.`,
        subtitle: `Subtitle goes here Vestibulum dolor velit, dapibus eget accumsan molestie, 
        laoreet non justo. Nulla dapibus dolor in.`,
        content: `In vestibulum urna quis viverra mollis. Etiam auctor augue id ante fringilla, nec sagittis leo tristique. Mauris scelerisque, metus quis volutpat porttitor, purus arcu varius dui, eu tempor augue neque in dolor. Praesent scelerisque non magna eget pretium. Nam nec rhoncus dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ante vel nisi aliquet tincidunt. Morbi at tristique justo. Fusce et dolor ornare, semper enim id, tristique magna.

Suspendisse dolor metus, venenatis a ultricies non, faucibus ac lorem. Proin euismod viverra nisl in gravida. Suspendisse massa nisl, ultrices quis dui in, consectetur cursus tortor. Proin sagittis nec libero a ullamcorper. Quisque aliquam enim fringilla, laoreet odio vel, condimentum eros. Donec malesuada justo sed nulla ultrices, sit amet condimentum ante scelerisque. Aenean sed porta tortor. Ut eget ultricies eros, a volutpat justo. Maecenas consectetur velit viverra, consequat eros nec, ullamcorper eros. Cras vestibulum vel felis et tristique.

Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean interdum justo quis ante vehicula, ac ornare libero dictum. Quisque finibus ac est eget sagittis. Nulla convallis, felis a sagittis finibus, augue orci aliquam lacus, a lacinia neque arcu nec erat. Nulla lacinia ligula ut faucibus vulputate. Sed et ligula a libero condimentum cursus. Nam nunc est, congue ornare ipsum nec, interdum lacinia enim.

Vivamus porttitor posuere ornare. Nullam quis est enim. Proin vel urna ut ante eleifend placerat nec a odio. Maecenas eget tincidunt magna. Fusce suscipit aliquet nisi, a faucibus elit semper vitae. Vestibulum quis risus scelerisque tortor ultricies faucibus ut vel neque. Curabitur lobortis, metus sed accumsan vestibulum, magna lorem laoreet lacus, in sodales tortor ex at nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce sollicitudin elit eget dui egestas accumsan at ac augue. Ut semper lacus vitae faucibus rutrum. Suspendisse vitae diam ut nisi interdum euismod. Nulla sollicitudin malesuada placerat. Aenean vehicula aliquet bibendum. Nullam sed lobortis neque. Nulla venenatis felis et justo viverra ullamcorper.

Aliquam malesuada feugiat ante, ut semper velit placerat sit amet. Nullam consequat diam ut felis vehicula, et rhoncus elit bibendum. Quisque ut hendrerit ex. Donec eu mauris hendrerit, ullamcorper elit id, sollicitudin diam. Mauris odio quam, aliquet eu feugiat sed, tempus eu metus. Sed ut orci risus. Duis eu est a odio rhoncus sodales. Etiam lectus sapien, ullamcorper ac mauris a, consequat vehicula ligula. Aliquam vitae porta nibh, eget hendrerit leo. In vitae blandit ipsum, at vestibulum lacus. Vivamus augue sem, gravida vitae ultrices ut, fringilla eu ex.`,
    language: 'en',    
    },

    {
        id: '683399f3-efd9-4797-985d-84ce2a199e00',
        news_id: news[1].id,
        title: `Duis sagittis orci massa, nec interdum lacus dignissim in. Morbi quis lacus risus. Mauris.`,
        subtitle: `Subtitle goes here Duis sagittis orci massa, nec interdum lacus dignissim in. Morbi quis lacus risus. Mauris.`,
        content: `Sed interdum vulputate libero et egestas. Phasellus dolor justo, tristique ut tempus et, tristique eu quam. Mauris ac felis in diam hendrerit dignissim. Nunc eget pellentesque tellus. Sed auctor feugiat scelerisque. Maecenas leo nisl, dictum non lacus et, convallis facilisis leo. Fusce id eros at justo gravida sollicitudin. Maecenas eu volutpat risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque tincidunt in augue sed facilisis. Etiam condimentum faucibus ullamcorper. Vivamus porta tellus quis sem iaculis, quis luctus dui varius. Pellentesque elementum, tellus id consequat semper, nunc urna interdum lorem, sit amet accumsan sapien dui ut tellus. Praesent sit amet nisl auctor, maximus sapien quis, mattis leo. Quisque eu magna at nisi interdum interdum.

        Etiam non lectus a tellus semper interdum. Vivamus sagittis mauris a magna ullamcorper iaculis. Duis fringilla lectus ac lectus auctor convallis. Suspendisse ut mauris tortor. Maecenas non tellus in metus ultrices vulputate. Nulla feugiat dui ac sapien congue condimentum eu vitae dolor. Fusce cursus eu velit ac placerat. Vivamus tellus tortor, auctor efficitur mattis et, malesuada at est. In ullamcorper, dolor ac aliquet dapibus, sapien turpis mattis mauris, nec cursus leo urna vel risus. Mauris iaculis nisi sollicitudin neque ornare, sit amet aliquet augue tempus. Sed sagittis ultricies lacus, tincidunt scelerisque massa auctor eu. Donec nec interdum nulla. Morbi ornare interdum interdum. Curabitur quis nisi magna. Donec et eros eget diam scelerisque fringilla. Cras scelerisque odio et dui ornare blandit.`,
        language: 'en',
        
    },

    {
        id: '6d07e9bc-47d9-42c0-bf84-c4ff7f2d23ad',
        news_id: news[2].id,
        title: `Күңгірттендіргіш немесе ультрициалды тоқтатыңыз. 
        Күшті тоқтату. Integer facilisis mi ac eros ornare.`,
        subtitle: `Субтитр осы жерде көрсетіледі. 
        Күшті тоқтату. Integer facilisis mi ac eros ornare.`,
        content: `Нақты жаңалықтардың мазмұны осы жерден басталады 
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labe and doore magna aliqua. Бұл ең аз және ең аз емес, quis nostrud exercitation ullamco laboris nisi ut aliquip exercition ullamco workis nisi ut aliquip exercitation ea commodo in. voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident, unt in culpa qui officia deserunt mollit anim id est laborum».
45 жылы Цицерон жазған "de Finibus Bonorum et Malorum" 1.10.32 бөлімі
«Бәрін түсініп, қатені түсінбеймін, laudantium accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis and quasi architecto beatae vitae dicta sunt explicabo. fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.`,
        language: 'kk',
        
    },

    {
        id: '8ba3edaa-052a-434e-adfc-8ea6a7f0b984',
        news_id: news[0].id,
        title: `Этиам Фрингилла AC Magna в растлении. 
        Phasellus id eros ac metustincidunt posuere id.`,
        subtitle: `Здесь идет подзаголовок: «Этиам Фрингилла, великий в растлении». 
        Phasellus id eros ac metustincidunt posuere id.`,
        content: `Содержание актуальных новостей начинается отсюда fringilla nisl egestas, sodales est. In mollis nisl eu nulla tempus egestas in et nibh. Pellentesque posuere lorem vitae lectus dictum volutpat. Curabitur congue ante a orci dictum, uttincidunt mauris pulvinar. Vivamus pulvinar vel lectus ut finibus. Fusce rhoncus mollis Malesuada. Nunc id justo ac arcu pulvinar rhoncus не является чем-то вроде сем. Sed commodo ipsum ante, eu aliquam ipsum tristique quis. Maecenas iaculis nunc quis tempor luctus. Изречение «В ха-хабитасс-платеа». Нам rhoncus justo eget odio fringilla ornare. Integer dignissim ullamcorper nisl vitae blandit.`,
        language: 'ru',
        
    },
    
];

const tags = [
    {
    id: 'a674bc74-c27c-4646-b927-cae6674453ab',
    name: 'Abai',
    slug: 'abai',
    image_url: '/images/Trending Topics/abai.png',
    },
    {
    id: 'cc95d88d-54d3-4135-aded-5424725ad095',
    name: 'Bbai',
    slug: 'bbai',
    image_url: '/images/Trending Topics/abai.png',
    },
    {
    id: '0165593f-bd5c-4acb-8b76-392b55d57be2',
    name: 'Bbai2',
    slug: 'bbai2',
    image_url: '/images/Trending Topics/abai.png',
    },
    {
    id: '4cb1d293-2f3b-4065-b3ca-7f3946cebe87',
    name: 'Bbai3',
    slug: 'bbai3',
    image_url: '/images/Trending Topics/abai.png',
    },
    {
    id: '069acf01-0fe3-41f9-9890-6e5a723aea92',
    name: 'Bbai4',
    slug: 'bbai4',
    image_url: '/images/Trending Topics/abai.png',
    },
    {
    id: '4ea91524-5f2d-4c71-9535-b61c9f15b7bf',
    name: 'Bbai5',
    slug: 'bbai5',
    image_url: '/images/Trending Topics/abai.png',
    },
    {
    id: '700ff7dc-7007-46bf-b2c9-5e61b105830f',
    name: 'Cbai',
    slug: 'cbai',
    image_url: '/images/Trending Topics/abai.png',
    },
    {
    id: '63431018-8aca-48c8-84c8-249a774113d2',
    name: 'Cbai2',
    slug: 'cbai2',
    image_url: '/images/Trending Topics/abai.png',
    },
    {
    id: '6eabd411-c418-4ebb-aef5-bfc3b7dba576',
    name: 'Cbai3',
    slug: 'cbai3',
    image_url: '/images/Trending Topics/abai.png',
    },
    {
    id: '3c41b1ae-dbc6-4cb6-98b2-247aa57f668a',
    name: 'Cbai4',
    slug: 'cbai4',
    image_url: '/images/Trending Topics/abai.png',
    },
    {
    id: 'ecb48b54-cf56-4596-ad5c-4a8664753735',
    name: 'Cbai5',
    slug: 'cbai5',
    image_url: '/images/Trending Topics/abai.png',
    },
    {
    id: '03fdcc4d-1b7c-427d-80d9-c1d526898610',
    name: 'Dbai',
    slug: 'dbai',
    image_url: '/images/Trending Topics/abai.png',
    },
    {
    id: '8f333ec0-a172-4d4f-b9c8-d65ec0460f26',
    name: 'Dbai2',
    slug: 'dbai2',
    image_url: '/images/Trending Topics/abai.png',
    },
    {
    id: '0c6a856e-0433-4e73-bd10-8275b9632e3c',
    name: 'Dbai3',
    slug: 'dbai3',
    image_url: '/images/Trending Topics/abai.png',
    },
    {
    id: '895d1241-6e9f-4e99-a33d-1b1f6b436e8a',
    name: 'Dbai4',
    slug: 'dbai4',
    image_url: '/images/Trending Topics/abai.png',
    },
    {
    id: '67efe79e-d167-46d6-acc9-0dc0d1fa33af',
    name: 'Dbai5',
    slug: 'dbai5',
    image_url: '/images/Trending Topics/abai.png',
    },
    {
    id: 'cc0e49d4-1604-4a7c-9f2f-1e609f6a3168',
    name: 'President',
    slug: 'president',
    image_url: '/images/Trending Topics/president.png',
    },
    {
    id: 'bdf13b1a-4af9-497c-b04a-dc3a93b1042c',
    name: 'Sports',
    slug: 'sports',
    image_url: '/images/Trending Topics/sports.png',
    },
    {
    id: '1faff809-f24e-416d-8270-617825f04cdf',
    name: 'Spirituality',
    slug: 'spirituality',
    image_url: '/images/Trending Topics/spirituality.png',
    },
    {
    id: '1b76fec3-bdf3-44de-a14c-9415528f82a5',
    name: 'World',
    slug: 'world',
    image_url: '/images/Trending Topics/world.png',
    },
    {
    id: 'e9ed7dcf-ecf1-4900-89d7-21c35820d133',
    name: 'Digital',
    slug: 'digital',
    image_url: '/images/Trending Topics/digital.png',
    },
    {
    id: 'd24e2888-9848-44e2-bc51-a0cd721f3c52',
    name: 'Digital2',
    slug: 'digital2',
    image_url: '/images/Trending Topics/digital.png',
    },
    {
    id: '9ecdcd3e-608c-41c7-b8c8-13b0585a8c14',
    name: 'Digital3',
    slug: 'digital3',
    image_url: '/images/Trending Topics/digital.png',
    },
    {
    id: '9bb462dc-7238-4030-8aed-4784cd6face5',
    name: 'Digital4',
    slug: 'digital4',
    image_url: '/images/Trending Topics/digital.png',
    },
    {
    id: '7ad98c87-dfec-4e11-a6d9-0502aafabb1a',
    name: 'Digital5',
    slug: 'digital5',
    image_url: '/images/Trending Topics/digital.png',
    },
    {
    id: 'dc0cd00d-7460-4c40-93c3-cb54062d486d',
    name: 'Syndicate',
    slug: 'syndicate',
    image_url: '/images/Trending Topics/syndicate.png',
    },
];
const news_tags = [
    {
    news_id: news[0].id,
    tag_id: tags[0].id,
    },
    {
    news_id: news[0].id,
    tag_id: tags[1].id,
    },
    {
    news_id: news[0].id,
    tag_id: tags[1].id,
    },
    {
    news_id: news[1].id,
    tag_id: tags[0].id,
    },
    {
    news_id: news[2].id,
    tag_id: tags[0].id,
    },
  
];

const questions = [
    {
    id: '7253d754-c9d3-4cc7-9b0b-9ec953717870',
    qdetail: 'What is the developer name?',
    option1: 'taiyyib',
    option2: 'zain',
    option3: `nurzhol`,
    correct: 'taiyyib',
    vote: 'taiyyib',
    iscorrect: true,
    voter_name: 'raza',
    date_time: '2025-08-29 20:10:00',
    },
    
];
export {users,news,authors,categories,subcategories,tags,translations,news_tags,questions};

