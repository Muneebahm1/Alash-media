
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
    {
    id: '4a6f3f3e-9e2f-4f9e-9b2e-8a7c4f6e2d11',
    name: 'Aigerim',
    email: 'aigerim@example.com',
    image_url: '/images/authors/14fdb9b3-07eb-4a96-8c76-90463390e1c3.jpg',
    biography: `Aigerim covers culture and society with a focus on human stories and community impact.`,
    },
    {
    id: '0d2c7fa4-3fbe-4b2f-9d3a-5f1c2a4b7e8f',
    name: 'Nursultan',
    email: 'nursultan@example.com',
    image_url: '/images/authors/33182afe-131f-40b1-b443-f940f17ec94c.png',
    biography: `Nursultan specializes in data-driven reporting on economics and infrastructure.`,
    },
    {
    id: 'f0a7a8c2-8c44-4b9f-9b0f-2d5e6a7b8c9d',
    name: 'Dana',
    email: 'dana@example.com',
    image_url: '/images/authors/3528c637-8ec6-43a3-97d3-bd5cbf14fdeb.png',
    biography: `Dana writes about technology, startups, and innovation across Central Asia.`,
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
    // Special Project subcategories
    {
    subcategory_id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
    subcategory_name: 'Documentary',
    category_id: categories[5].category_id, // Special Project category
    },
    {
    subcategory_id: 'b2c3d4e5-f6a7-4901-bcde-f23456789012',
    subcategory_name: 'Investigation',
    category_id: categories[5].category_id, // Special Project category
    },
    {
    subcategory_id: 'c3d4e5f6-a7b8-4012-cdef-345678901234',
    subcategory_name: 'Feature Story',
    category_id: categories[5].category_id, // Special Project category
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
        image_url: '/images/Top News/news1.png',
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
        category_id: categories[1].category_id,
        subcategory_id: subcategories[1].subcategory_id,
        title: `Duis et fringilla dui, eget fermentum neque. 
        Praesent rutrum sed felis eu tincidunt. 
        Praesent pulvinar nisl nunc`,
        subtitle: `Subtitle goes here Duis et fringilla dui, eget fermentum neque. 
        Praesent rutrum sed felis eu tincidunt. 
        Praesent pulvinar nisl nunc`,
        image_url: '/images/Top News/news2.png',
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
        image_url: '/images/Top News/news3.png', 
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
        image_url: '/images/Top News/news4.png',
        content: `Content of actual news starts from here fringilla nisl egestas, sodales est. In mollis nisl eu nulla tempus egestas in et nibh. Pellentesque posuere lorem vitae lectus dictum volutpat. Curabitur congue ante a orci dictum, ut tincidunt mauris pulvinar. Vivamus pulvinar vel lectus ut finibus. Fusce rhoncus mollis malesuada. Nunc id justo ac arcu pulvinar rhoncus nec a sem. Sed commodo ipsum ante, eu aliquam ipsum tristique quis. Maecenas iaculis nunc quis tempor luctus. In hac habitasse platea dictumst. Nam rhoncus justo eget odio fringilla ornare. Integer dignissim ullamcorper nisl vitae blandit.`,
        slug: 'etiam-fringilla-ac-magna-in-molestie',
        section: 'Top News',
        view_count: 0,
        date_time: '2025-06-20 11:10:00',
    },
    // Special Project news articles
    {
        id: '5a1f7f2b-8e3a-4a3c-b9f1-9a2c1d7e4b10',
        author_id: authors[0].id,
        category_id: categories[5].category_id, // Special Project
        subcategory_id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890', // Documentary
        title: `Climate Change Impact: A Deep Dive into Kazakhstan's Environmental Challenges`,
        subtitle: `An in-depth documentary exploring how climate change is affecting Kazakhstan's agriculture, water resources, and urban development.`,
        image_url: '/images/special-projects/climate-documentary.jpg',
        content: `This comprehensive documentary project examines the multifaceted impact of climate change on Kazakhstan. Through extensive research and interviews with local experts, farmers, and government officials, we explore how rising temperatures and changing precipitation patterns are reshaping the country's landscape.

        The project reveals critical insights into water scarcity issues affecting the Aral Sea region, the challenges facing traditional agriculture in southern Kazakhstan, and innovative adaptation strategies being implemented across the nation. Our investigation spans six months of fieldwork, covering over 2,000 kilometers and featuring testimonies from more than 50 stakeholders.

        Key findings include a 15% decrease in agricultural productivity in drought-affected regions, the emergence of new climate-resilient farming techniques, and government initiatives aimed at sustainable development. The documentary also highlights success stories of communities that have successfully adapted to changing environmental conditions.

        This special project combines data journalism with compelling human stories, offering viewers a comprehensive understanding of one of the most pressing issues facing Kazakhstan today. Through interactive maps, infographics, and video testimonials, we present a multi-layered narrative that goes beyond traditional reporting.`,
        slug: 'climate-change-impact-kazakhstan-documentary',
        section: 'Special Projects',
        view_count: 0,
        read_time: 12,
        date_time: '2024-12-15 09:00:00',
    },
    {
        id: '3c9e2d74-1b6a-4f0a-92d3-5e6f7a8b9c01',
        author_id: authors[2].id,
        category_id: categories[5].category_id, // Special Project
        subcategory_id: 'b2c3d4e5-f6a7-4901-bcde-f23456789012', // Investigation
        title: `Following the Money: An Investigation into Public Procurement Transparency`,
        subtitle: `A six-month investigative project examining transparency and accountability in government procurement processes across major cities.`,
        image_url: '/images/special-projects/procurement-investigation.jpg',
        content: `This investigative special project delves deep into the complex world of public procurement, analyzing contracts worth over 500 billion tenge across multiple government agencies. Using freedom of information requests, data analysis, and source interviews, our team uncovered patterns that raise important questions about transparency and efficiency.

        The investigation employed advanced data analysis techniques to examine thousands of procurement records, identifying unusual bidding patterns, potential conflicts of interest, and cases where proper procedures may not have been followed. Our methodology included cross-referencing company ownership data, analyzing bid submission patterns, and conducting extensive interviews with procurement officials, contractors, and oversight bodies.

        Key revelations include instances where single companies won multiple large contracts through subsidiaries, cases of unusually high pricing compared to market rates, and gaps in the current oversight system. The project also highlights positive examples of transparent procurement practices and recommendations for systemic improvements.

        This investigation represents months of meticulous research, involving collaboration with legal experts, data scientists, and transparency advocates. The findings have been shared with relevant authorities and have sparked important discussions about procurement reform. The project includes interactive visualizations showing procurement networks and spending patterns across different sectors.`,
        slug: 'public-procurement-transparency-investigation',
        section: 'Special Projects',
        view_count: 0,
        read_time: 18,
        date_time: '2024-11-20 14:30:00',
    },
    {
        id: '9d2a7c35-6e41-4b8f-8a7e-2c3d4e5f6a70',
        author_id: authors[1].id,
        category_id: categories[5].category_id, // Special Project
        subcategory_id: 'c3d4e5f6-a7b8-4012-cdef-345678901234', // Feature Story
        title: `Digital Nomads in Almaty: How Remote Work is Transforming Kazakhstan's Largest City`,
        subtitle: `A comprehensive feature exploring the growing digital nomad community in Almaty and its impact on local economy, culture, and urban development.`,
        image_url: '/images/special-projects/digital-nomads-almaty.jpg',
        content: `This feature story project explores the fascinating phenomenon of digital nomadism in Almaty, documenting how remote workers from around the world are choosing Kazakhstan's largest city as their temporary or permanent base. Through in-depth interviews, economic analysis, and cultural observation, we present a comprehensive picture of this growing trend.

        The project follows the stories of 25 digital nomads from 15 different countries, examining their motivations for choosing Almaty, their experiences navigating local bureaucracy, and their contributions to the local economy. We analyze data on co-working space growth, rental market changes, and the emergence of nomad-friendly services and communities.

        Our research reveals that digital nomads contribute an estimated 2.5 billion tenge annually to Almaty's economy through accommodation, dining, transportation, and entertainment spending. The project also examines challenges, including visa regulations, language barriers, and infrastructure limitations that affect the nomad experience.

        The feature includes profiles of successful nomad entrepreneurs who have started businesses in Kazakhstan, local business owners who have adapted their services for international remote workers, and government officials working on policies to attract digital talent. Interactive maps show nomad hotspots, cost comparisons with other popular nomad destinations, and testimonials from both nomads and locals.

        This special project combines human interest storytelling with economic analysis, offering insights into how global remote work trends are reshaping urban landscapes in unexpected places. The story is told through multimedia elements including video interviews, photo essays, and data visualizations.`,
        slug: 'digital-nomads-almaty-remote-work-transformation',
        section: 'Special Projects',
        view_count: 0,
        read_time: 15,
        date_time: '2024-10-05 11:15:00',
    },
    {
        id: '2f7b9a4c-3e1d-4c5a-9b8f-1a2b3c4d5e6f',
        author_id: authors[0].id,
        category_id: categories[5].category_id, // Special Project
        subcategory_id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890', // Documentary
        title: `Preserving Heritage: The Last Masters of Traditional Kazakh Crafts`,
        subtitle: `A documentary project celebrating the artisans keeping ancient Kazakh crafts alive and exploring efforts to pass these skills to new generations.`,
        image_url: '/logo.png',
        content: `This documentary special project celebrates the remarkable artisans who continue to practice traditional Kazakh crafts, from felt-making and carpet weaving to jewelry crafting and leatherwork. Over eight months, our team traveled across Kazakhstan to document these living treasures and the challenges they face in preserving their ancient skills.

        The project features intimate portraits of master craftspeople, some of whom are the last practitioners of their particular art form. We document their techniques, learn about the cultural significance of their work, and explore innovative approaches to teaching these skills to younger generations. The documentary includes rare footage of traditional techniques that have been passed down through families for centuries.

        Our investigation reveals both the challenges and opportunities facing traditional crafts in modern Kazakhstan. While globalization and urbanization threaten some practices, we also discover inspiring examples of young artisans who are finding new markets for traditional products and innovative ways to blend ancient techniques with contemporary design.

        The project includes collaborations with cultural institutions, craft cooperatives, and educational programs working to preserve these traditions. We examine successful models from other countries and explore how digital platforms are helping Kazakh artisans reach global markets while maintaining the authenticity of their work.

        This multimedia documentary combines stunning visual documentation of craft techniques with thoughtful analysis of cultural preservation challenges. The project includes an interactive online exhibition, educational materials for schools, and a traveling physical exhibition that has been displayed in museums across Kazakhstan.`,
        slug: 'preserving-heritage-traditional-kazakh-crafts-masters',
        section: 'Special Projects',
        view_count: 0,
        read_time: 20,
        date_time: '2024-09-12 16:45:00',
    },
    {
        id: 'a7f5d3c2-1b4e-49ab-8cde-7e6f5a4b3c21',
        author_id: authors[2].id,
        category_id: categories[5].category_id,
        subcategory_id: 'b2c3d4e5-f6a7-4901-bcde-f23456789012', // Investigation
        title: `Road Safety Audit: Are Our Highways Ready for 2030?`,
        subtitle: `An investigation into infrastructure safety, maintenance cycles, and budget utilization across regions.`,
        image_url: '/footer-logo.png',
        content: `We analyzed five years of accident data, tender documents, and maintenance logs across three major corridors. The project surfaces discrepancies between planned and delivered outcomes and highlights best practices from regions with improved safety indices.`,
        slug: 'road-safety-audit-highways-2030',
        section: 'Special Projects',
        view_count: 0,
        read_time: 11,
        date_time: '2024-08-22 10:00:00',
    },
    {
        id: 'b8e6c4d2-3a5f-41b9-9dce-5f6a7b8c9d10',
        author_id: authors[1].id,
        category_id: categories[5].category_id,
        subcategory_id: 'c3d4e5f6-a7b8-4012-cdef-345678901234', // Feature Story
        title: `From Steppe to Startup: Young Founders Building the Future`,
        subtitle: `Profiles of emerging founders outside traditional tech hubs, and the ecosystems supporting them.`,
        image_url: '/logo.png',
        content: `A cross-country feature on young founders creating real-world solutions in agritech, logistics, and education. Includes funding maps, accelerator timelines, and founder toolkits.`,
        slug: 'from-steppe-to-startup-young-founders',
        section: 'Special Projects',
        view_count: 0,
        read_time: 9,
        date_time: '2024-07-10 12:40:00',
    },
    {
        id: 'c9d7e5f3-4b6a-42ad-8f1e-0a2b3c4d5e6f',
        author_id: authors[0].id,
        category_id: categories[5].category_id,
        subcategory_id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890', // Documentary
        title: `Water Lines: The Invisible Network Powering Our Cities`,
        subtitle: `A documentary mapping the life of water from source to sink, and the communities that keep it flowing.`,
        image_url: '/footer-logo.png',
        content: `Shot across three seasons, this project documents the supply chain of urban water systems, the workers behind them, and the innovations making them more resilient to climate pressure.`,
        slug: 'water-lines-documentary-urban-systems',
        section: 'Special Projects',
        view_count: 0,
        read_time: 14,
        date_time: '2024-06-18 08:25:00',
    },
    {
        id: 'd0e1f2a3-5b6c-47de-9f01-2a3b4c5d6e7f',
        author_id: authors[2].id,
        category_id: categories[5].category_id,
        subcategory_id: 'b2c3d4e5-f6a7-4901-bcde-f23456789012', // Investigation
        title: `School Air Quality: Measuring What Children Breathe Indoors`,
        subtitle: `A data-driven investigation into CO2, PM2.5, and ventilation across public schools.`,
        image_url: '/logo.png',
        content: `Using portable sensors and transparent methodology, we measured indoor air across 30 schools and correlated findings with attendance and reported headaches. Results inform a set of low-cost recommendations for administrators.`,
        slug: 'school-air-quality-measurement-investigation',
        section: 'Special Projects',
        view_count: 0,
        read_time: 10,
        date_time: '2024-05-02 09:55:00',
    },
    // Interview section (6 items)
    {
        id: 'c2e8d9a1-4b5f-4e2d-8f9a-1c2b3a4d5e6f',
        author_id: authors[3].id,
        category_id: categories[0].category_id,
        subcategory_id: subcategories[1].subcategory_id,
        title: 'In Conversation: Voices from the Steppe',
        subtitle: 'Aigerim sits down with community leaders on culture and change.',
        image_url: '/images/interview/69b98e9a-34d9-4b8f-840c-28f5db9e68c2.jpg',
        content: 'Long-form interview exploring culture, identity, and local initiatives.',
        slug: 'in-conversation-voices-from-the-steppe',
        section: 'Interview',
        view_count: 0,
        date_time: '2025-09-01 10:00:00',
    },
    {
        id: 'd3f9e0b2-5c6d-4f3e-9a0b-2c3d4e5f6a7b',
        author_id: authors[4].id,
        category_id: categories[0].category_id,
        subcategory_id: subcategories[0].subcategory_id,
        title: 'Policy and People: A Dialogue with City Planners',
        subtitle: 'Nursultan talks urban design, mobility, and air quality.',
        image_url: '/images/interview/97951721cd898e8aff5789b9663956fc01b97ed6.jpg',
        content: 'Interview focusing on planning decisions and their impact on residents.',
        slug: 'policy-and-people-dialogue-with-city-planners',
        section: 'Interview',
        view_count: 0,
        date_time: '2025-09-02 11:00:00',
    },
    {
        id: 'e4a0f1c3-6d7e-405f-a1b2-3d4e5f6a7b8c',
        author_id: authors[5].id,
        category_id: categories[1].category_id,
        subcategory_id: subcategories[1].subcategory_id,
        title: 'Startup Stories: Founders on Building in Almaty',
        subtitle: 'Dana interviews early-stage founders on product-market fit.',
        image_url: '/images/interview/f29ce87e-03b3-4dde-88ec-1aace23e0d48.jpg',
        content: 'Insights on fundraising, teams, and customer discovery from local founders.',
        slug: 'startup-stories-founders-building-in-almaty',
        section: 'Interview',
        view_count: 0,
        date_time: '2025-09-03 09:30:00',
    },
    {
        id: 'f5b1a2d4-7e8f-4160-b2c3-4e5f6a7b8c9d',
        author_id: authors[3].id,
        category_id: categories[2].category_id,
        subcategory_id: subcategories[0].subcategory_id,
        title: 'Education Reform: A Teacher’s Perspective',
        subtitle: 'Frontline experiences from classrooms across regions.',
        image_url: '/images/interview/e1535aaa-aeb8-4c48-a7b7-f878c59c76d5.jpg',
        content: 'Teachers discuss curricula, language, and assessment changes.',
        slug: 'education-reform-teachers-perspective',
        section: 'Interview',
        view_count: 0,
        date_time: '2025-09-04 15:20:00',
    },
    {
        id: 'a6c2b3e5-8f9a-4271-c3d4-5f6a7b8c9d0e',
        author_id: authors[4].id,
        category_id: categories[0].category_id,
        subcategory_id: subcategories[1].subcategory_id,
        title: 'Health Systems: Listening to Hospital Administrators',
        subtitle: 'On staffing, procurement, and digital transformation.',
        image_url: '/images/interview/8d0ea1170b81b5115323da59daceec0d6866490e.jpg',
        content: 'Discussion on resource allocation and patient outcomes.',
        slug: 'health-systems-hospital-administrators',
        section: 'Interview',
        view_count: 0,
        date_time: '2025-09-05 13:10:00',
    },
    {
        id: 'b7d3a4f6-901a-4382-d4e5-6a7b8c9d0e1f',
        author_id: authors[5].id,
        category_id: categories[1].category_id,
        subcategory_id: subcategories[0].subcategory_id,
        title: 'Arts and Identity: A Curator Reflects',
        subtitle: 'Museums, archives, and community-led initiatives.',
        image_url: '/images/interview/229fb952797f1af3fbfa6e44275c8a91921c6b8a.jpg',
        content: 'Curatorial practices and inclusive programming in the region.',
        slug: 'arts-and-identity-curator-reflects',
        section: 'Interview',
        view_count: 0,
        date_time: '2025-09-06 10:45:00',
    },
    // Multimedia section (6 items)
    {
        id: 'aa10bb20-cc30-4dd0-9ee0-112233445566',
        author_id: authors[0].id,
        category_id: categories[0].category_id,
        subcategory_id: subcategories[0].subcategory_id,
        title: 'Photo Essay: Markets at Dawn',
        subtitle: 'A visual journey through the city’s early hours.',
        image_url: '/images/multimedia/0a326e59e90d33584fb9a412d4a86b71591486c6.jpg',
        content: 'A curated set of images exploring texture, light, and daily life.',
        slug: 'photo-essay-markets-at-dawn',
        section: 'Multimedia',
        view_count: 0,
        date_time: '2025-09-07 09:00:00',
    },
    {
        id: 'bb21cc31-dd41-5ee1-aff1-223344556677',
        author_id: authors[1].id,
        category_id: categories[1].category_id,
        subcategory_id: subcategories[1].subcategory_id,
        title: 'Short Film: Rivers in Summer',
        subtitle: 'A lyrical look at water and city life.',
        image_url: '/images/multimedia/1a74a5744c0f6679075108a235555d586636d81f.jpg',
        content: 'A short video piece with ambient sound design.',
        slug: 'short-film-rivers-in-summer',
        section: 'Multimedia',
        view_count: 0,
        date_time: '2025-09-08 12:15:00',
    },
    {
        id: 'cc32dd42-ee52-6ff2-b002-334455667788',
        author_id: authors[2].id,
        category_id: categories[2].category_id,
        subcategory_id: subcategories[0].subcategory_id,
        title: 'Audio: Commuter Stories',
        subtitle: 'Daily rides, diverse voices.',
        image_url: '/images/multimedia/55eb0559c2a63f38fb0747fa543e7ddd487b4183.jpg',
        content: 'A montage of first-person accounts on the move.',
        slug: 'audio-commuter-stories',
        section: 'Multimedia',
        view_count: 0,
        date_time: '2025-09-09 08:10:00',
    },
    {
        id: 'dd43ee53-ff63-7003-c113-445566778899',
        author_id: authors[3].id,
        category_id: categories[0].category_id,
        subcategory_id: subcategories[1].subcategory_id,
        title: 'Gallery: Street Scenes',
        subtitle: 'Textures of everyday life in the city.',
        image_url: '/images/multimedia/ac47c747-3493-49d7-80e7-115767f54ec8.jpg',
        content: 'A collection highlighting movement and color.',
        slug: 'gallery-street-scenes',
        section: 'Multimedia',
        view_count: 0,
        date_time: '2025-09-10 17:45:00',
    },
    {
        id: 'ee54ff64-0074-8114-d224-556677889900',
        author_id: authors[4].id,
        category_id: categories[1].category_id,
        subcategory_id: subcategories[0].subcategory_id,
        title: '360 Tour: Museum at Night',
        subtitle: 'An immersive walkthrough after hours.',
        image_url: '/images/multimedia/b2f7cddc-2cb8-4eac-8277-3aaa92e74216.jpg',
        content: 'Interactive experience exploring exhibits and spaces.',
        slug: '360-tour-museum-at-night',
        section: 'Multimedia',
        view_count: 0,
        date_time: '2025-09-11 19:30:00',
    },
    {
        id: 'ff650075-1185-9225-e335-667788990011',
        author_id: authors[5].id,
        category_id: categories[2].category_id,
        subcategory_id: subcategories[1].subcategory_id,
        title: 'Map: Cycling Paths Expanded',
        subtitle: 'An annotated map showing new routes.',
        image_url: '/images/multimedia/fcacc7c4-902a-439e-ae17-69819bd5858f.jpg',
        content: 'Data visualization with route details and elevation.',
        slug: 'map-cycling-paths-expanded',
        section: 'Multimedia',
        view_count: 0,
        date_time: '2025-09-12 07:50:00',
    },
    // Special Projects additions to reach 6 per subcategory
    // Documentary (add 3 more)
    {
        id: '10111213-1415-1617-1819-1a1b1c1d1e1f',
        author_id: authors[0].id,
        category_id: categories[5].category_id,
        subcategory_id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
        title: 'Mountains and Memory: Life in High Villages',
        subtitle: 'Documenting seasonal cycles and community resilience.',
        image_url: '/images/topnews/news5.png',
        content: 'A visual and narrative account of mountain communities.',
        slug: 'mountains-and-memory-high-villages',
        section: 'Special Projects',
        view_count: 0,
        date_time: '2024-04-12 08:00:00',
    },
    {
        id: '20212223-2425-2627-2829-2a2b2c2d2e2f',
        author_id: authors[1].id,
        category_id: categories[5].category_id,
        subcategory_id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
        title: 'Rail Lines: Journeys Across the Steppe',
        subtitle: 'A documentary travelogue by rail.',
        image_url: '/images/topnews/news6.png',
        content: 'People, landscapes, and stories from stations big and small.',
        slug: 'rail-lines-journeys-across-the-steppe',
        section: 'Special Projects',
        view_count: 0,
        date_time: '2024-04-20 09:40:00',
    },
    {
        id: '30313233-3435-3637-3839-3a3b3c3d3e3f',
        author_id: authors[2].id,
        category_id: categories[5].category_id,
        subcategory_id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
        title: 'Desert Water: Wells that Sustain',
        subtitle: 'Keeping settlements alive through ingenuity.',
        image_url: '/images/topnews/news7.png',
        content: 'Profiles of well keepers and local hydrology.',
        slug: 'desert-water-wells-that-sustain',
        section: 'Special Projects',
        view_count: 0,
        date_time: '2024-04-28 15:05:00',
    },
    // Investigation (add 3 more)
    {
        id: '40414243-4445-4647-4849-4a4b4c4d4e4f',
        author_id: authors[3].id,
        category_id: categories[5].category_id,
        subcategory_id: 'b2c3d4e5-f6a7-4901-bcde-f23456789012',
        title: 'Procurement Watch: School Renovations',
        subtitle: 'Tracking timelines, costs, and contractors.',
        image_url: '/images/topnews/news8.png',
        content: 'An audit of project delivery against plan.',
        slug: 'procurement-watch-school-renovations',
        section: 'Special Projects',
        view_count: 0,
        date_time: '2024-03-05 10:20:00',
    },
    {
        id: '50515253-5455-5657-5859-5a5b5c5d5e5f',
        author_id: authors[4].id,
        category_id: categories[5].category_id,
        subcategory_id: 'b2c3d4e5-f6a7-4901-bcde-f23456789012',
        title: 'Budget Lines: Where the Money Moves',
        subtitle: 'Following allocations across agencies.',
        image_url: '/images/herotopnews/03ab47c1-cc6a-4ef0-b863-b6de298f753f.png',
        content: 'Patterns in spending and bottlenecks in execution.',
        slug: 'budget-lines-where-the-money-moves',
        section: 'Special Projects',
        view_count: 0,
        date_time: '2024-03-14 14:10:00',
    },
    {
        id: '60616263-6465-6667-6869-6a6b6c6d6e6f',
        author_id: authors[5].id,
        category_id: categories[5].category_id,
        subcategory_id: 'b2c3d4e5-f6a7-4901-bcde-f23456789012',
        title: 'Transparency Scorecard: Regional Overview',
        subtitle: 'Comparing procurement outcomes by region.',
        image_url: '/images/herotopnews/11e6a7e7-0920-4584-9792-c51f2a7d1c77.png',
        content: 'A composite index built from open data sources.',
        slug: 'transparency-scorecard-regional-overview',
        section: 'Special Projects',
        view_count: 0,
        date_time: '2024-03-22 09:55:00',
    },
    // Feature Story (add 4 more)
    {
        id: '70717273-7475-7677-7879-7a7b7c7d7e7f',
        author_id: authors[0].id,
        category_id: categories[5].category_id,
        subcategory_id: 'c3d4e5f6-a7b8-4012-cdef-345678901234',
        title: 'Cafes and Code: The New Workday',
        subtitle: 'How remote workers shape neighborhood economies.',
        image_url: '/images/topnews/news3.png',
        content: 'Stories from freelancers and small business owners.',
        slug: 'cafes-and-code-the-new-workday',
        section: 'Special Projects',
        view_count: 0,
        date_time: '2024-02-10 10:00:00',
    },
    {
        id: '80818283-8485-8687-8889-8a8b8c8d8e8f',
        author_id: authors[1].id,
        category_id: categories[5].category_id,
        subcategory_id: 'c3d4e5f6-a7b8-4012-cdef-345678901234',
        title: 'City Soundscapes: Music in Side Streets',
        subtitle: 'Buskers, venues, and night rhythms.',
        image_url: '/images/topnews/news2.png',
        content: 'A feature on the evolving live music scene.',
        slug: 'city-soundscapes-music-in-side-streets',
        section: 'Special Projects',
        view_count: 0,
        date_time: '2024-02-18 12:30:00',
    },
    {
        id: '90919293-9495-9697-9899-9a9b9c9d9e9f',
        author_id: authors[2].id,
        category_id: categories[5].category_id,
        subcategory_id: 'c3d4e5f6-a7b8-4012-cdef-345678901234',
        title: 'Public Spaces: Designing for Everyone',
        subtitle: 'Accessibility, shade, and seating that welcomes all.',
        image_url: '/images/topnews/news1.png',
        content: 'Design principles from parks and plazas.',
        slug: 'public-spaces-designing-for-everyone',
        section: 'Special Projects',
        view_count: 0,
        date_time: '2024-02-24 16:05:00',
    },
    {
        id: 'a0a1a2a3-a4a5-a6a7-a8a9-aaabacadaeaf',
        author_id: authors[3].id,
        category_id: categories[5].category_id,
        subcategory_id: 'c3d4e5f6-a7b8-4012-cdef-345678901234',
        title: 'Local Foodways: Recipes and Roots',
        subtitle: 'A tour of neighborhood kitchens and stories.',
        image_url: '/images/topnews/news4.png',
        content: 'Family recipes and cultural preservation in meals.',
        slug: 'local-foodways-recipes-and-roots',
        section: 'Special Projects',
        view_count: 0,
        date_time: '2024-03-01 18:25:00',
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

