import React from 'react';
import { StaticRouter } from 'react-router';
import renderer from 'react-test-renderer';
import NewsList from '../index';

it('render with default props', () => {
  const component = renderer.create(
    <NewsList />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('render with full props', () => {
  const component = renderer.create(
    <StaticRouter context={{}}><NewsList dataSource={mockDataSource} loading={false} /></StaticRouter>);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

const mockDataSource = [
  {
    "web_url": "https://www.nytimes.com/2018/09/21/travel/singapore-travel-budget.html",
    "snippet": "In the hit movie “Crazy Rich Asians,” the country looks luxe. But it’s easy to have a great time (and eat memorably well) without spending much.",
    "print_page": "8",
    "blog": {},
    "source": "The New York Times",
    "multimedia": [
      {
        "rank": 0,
        "subtype": "xlarge",
        "caption": null,
        "credit": null,
        "type": "image",
        "url": "images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-articleLarge.jpg",
        "height": 450,
        "width": 600,
        "legacy": {
          "xlarge": "images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-articleLarge.jpg",
          "xlargewidth": 600,
          "xlargeheight": 450
        },
        "subType": "xlarge",
        "crop_name": "articleLarge"
      },
      {
        "rank": 0,
        "subtype": "wide",
        "caption": null,
        "credit": null,
        "type": "image",
        "url": "images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-thumbWide.jpg",
        "height": 126,
        "width": 190,
        "legacy": {
          "wide": "images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-thumbWide.jpg",
          "widewidth": 190,
          "wideheight": 126
        },
        "subType": "wide",
        "crop_name": "thumbWide"
      },
      {
        "rank": 0,
        "subtype": "thumbnail",
        "caption": null,
        "credit": null,
        "type": "image",
        "url": "images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-thumbStandard.jpg",
        "height": 75,
        "width": 75,
        "legacy": {
          "thumbnail": "images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-thumbStandard.jpg",
          "thumbnailwidth": 75,
          "thumbnailheight": 75
        },
        "subType": "thumbnail",
        "crop_name": "thumbStandard"
      },
      {
        "rank": 0,
        "subtype": "articleInline",
        "caption": null,
        "credit": null,
        "type": "image",
        "url": "images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-articleInline.jpg",
        "height": 143,
        "width": 190,
        "legacy": {},
        "subType": "articleInline",
        "crop_name": "articleInline"
      },
      {
        "rank": 0,
        "subtype": "blog225",
        "caption": null,
        "credit": null,
        "type": "image",
        "url": "images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-blog225.jpg",
        "height": 169,
        "width": 225,
        "legacy": {},
        "subType": "blog225",
        "crop_name": "blog225"
      },
      {
        "rank": 0,
        "subtype": "blog427",
        "caption": null,
        "credit": null,
        "type": "image",
        "url": "images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-blog427.jpg",
        "height": 320,
        "width": 427,
        "legacy": {},
        "subType": "blog427",
        "crop_name": "blog427"
      },
      {
        "rank": 0,
        "subtype": "blog480",
        "caption": null,
        "credit": null,
        "type": "image",
        "url": "images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-blog480.jpg",
        "height": 360,
        "width": 480,
        "legacy": {},
        "subType": "blog480",
        "crop_name": "blog480"
      },
      {
        "rank": 0,
        "subtype": "blog533",
        "caption": null,
        "credit": null,
        "type": "image",
        "url": "images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-blog533.jpg",
        "height": 400,
        "width": 533,
        "legacy": {},
        "subType": "blog533",
        "crop_name": "blog533"
      },
      {
        "rank": 0,
        "subtype": "blogSmallInline",
        "caption": null,
        "credit": null,
        "type": "image",
        "url": "images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-blogSmallInline.jpg",
        "height": 113,
        "width": 151,
        "legacy": {},
        "subType": "blogSmallInline",
        "crop_name": "blogSmallInline"
      },
      {
        "rank": 0,
        "subtype": "blogSmallThumb",
        "caption": null,
        "credit": null,
        "type": "image",
        "url": "images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-blogSmallThumb.jpg",
        "height": 50,
        "width": 50,
        "legacy": {},
        "subType": "blogSmallThumb",
        "crop_name": "blogSmallThumb"
      },
      {
        "rank": 0,
        "subtype": "facebookJumbo",
        "caption": null,
        "credit": null,
        "type": "image",
        "url": "images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-facebookJumbo.jpg",
        "height": 550,
        "width": 1050,
        "legacy": {},
        "subType": "facebookJumbo",
        "crop_name": "facebookJumbo"
      },
      {
        "rank": 0,
        "subtype": "filmstrip",
        "caption": null,
        "credit": null,
        "type": "image",
        "url": "images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-filmstrip.jpg",
        "height": 190,
        "width": 190,
        "legacy": {},
        "subType": "filmstrip",
        "crop_name": "filmstrip"
      },
      {
        "rank": 0,
        "subtype": "hpLarge",
        "caption": null,
        "credit": null,
        "type": "image",
        "url": "images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-hpLarge.jpg",
        "height": 287,
        "width": 511,
        "legacy": {},
        "subType": "hpLarge",
        "crop_name": "hpLarge"
      },
      {
        "rank": 0,
        "subtype": "hpSmall",
        "caption": null,
        "credit": null,
        "type": "image",
        "url": "images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-hpSmall.jpg",
        "height": 122,
        "width": 163,
        "legacy": {},
        "subType": "hpSmall",
        "crop_name": "hpSmall"
      },
      {
        "rank": 0,
        "subtype": "jumbo",
        "caption": null,
        "credit": null,
        "type": "image",
        "url": "images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-jumbo.jpg",
        "height": 768,
        "width": 1024,
        "legacy": {},
        "subType": "jumbo",
        "crop_name": "jumbo"
      },
      {
        "rank": 0,
        "subtype": "largeHorizontal375",
        "caption": null,
        "credit": null,
        "type": "image",
        "url": "images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-largeHorizontal375.jpg",
        "height": 250,
        "width": 375,
        "legacy": {},
        "subType": "largeHorizontal375",
        "crop_name": "largeHorizontal375"
      },
      {
        "rank": 0,
        "subtype": "largeHorizontalJumbo",
        "caption": null,
        "credit": null,
        "type": "image",
        "url": "images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-largeHorizontalJumbo.jpg",
        "height": 683,
        "width": 1024,
        "legacy": {},
        "subType": "largeHorizontalJumbo",
        "crop_name": "largeHorizontalJumbo"
      },
      {
        "rank": 0,
        "subtype": "largeWidescreen573",
        "caption": null,
        "credit": null,
        "type": "image",
        "url": "images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-largeWidescreen573.jpg",
        "height": 322,
        "width": 573,
        "legacy": {},
        "subType": "largeWidescreen573",
        "crop_name": "largeWidescreen573"
      },
      {
        "rank": 0,
        "subtype": "largeWidescreen1050",
        "caption": null,
        "credit": null,
        "type": "image",
        "url": "images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-largeWidescreen1050.jpg",
        "height": 591,
        "width": 1050,
        "legacy": {},
        "subType": "largeWidescreen1050",
        "crop_name": "largeWidescreen1050"
      },
      {
        "rank": 0,
        "subtype": "master1050",
        "caption": null,
        "credit": null,
        "type": "image",
        "url": "images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-master1050.jpg",
        "height": 788,
        "width": 1050,
        "legacy": {},
        "subType": "master1050",
        "crop_name": "master1050"
      },
      {
        "rank": 0,
        "subtype": "master180",
        "caption": null,
        "credit": null,
        "type": "image",
        "url": "images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-master180.jpg",
        "height": 135,
        "width": 180,
        "legacy": {},
        "subType": "master180",
        "crop_name": "master180"
      },
      {
        "rank": 0,
        "subtype": "master315",
        "caption": null,
        "credit": null,
        "type": "image",
        "url": "images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-master315.jpg",
        "height": 236,
        "width": 315,
        "legacy": {},
        "subType": "master315",
        "crop_name": "master315"
      },
      {
        "rank": 0,
        "subtype": "master495",
        "caption": null,
        "credit": null,
        "type": "image",
        "url": "images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-master495.jpg",
        "height": 371,
        "width": 495,
        "legacy": {},
        "subType": "master495",
        "crop_name": "master495"
      },
      {
        "rank": 0,
        "subtype": "master768",
        "caption": null,
        "credit": null,
        "type": "image",
        "url": "images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-master768.jpg",
        "height": 576,
        "width": 768,
        "legacy": {},
        "subType": "master768",
        "crop_name": "master768"
      },
      {
        "rank": 0,
        "subtype": "master675",
        "caption": null,
        "credit": null,
        "type": "image",
        "url": "images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-master675.jpg",
        "height": 506,
        "width": 675,
        "legacy": {},
        "subType": "master675",
        "crop_name": "master675"
      },
      {
        "rank": 0,
        "subtype": "mediumFlexible177",
        "caption": null,
        "credit": null,
        "type": "image",
        "url": "images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-mediumFlexible177.jpg",
        "height": 133,
        "width": 177,
        "legacy": {},
        "subType": "mediumFlexible177",
        "crop_name": "mediumFlexible177"
      },
      {
        "rank": 0,
        "subtype": "mediumSquare149",
        "caption": null,
        "credit": null,
        "type": "image",
        "url": "images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-mediumSquare149.jpg",
        "height": 149,
        "width": 149,
        "legacy": {},
        "subType": "mediumSquare149",
        "crop_name": "mediumSquare149"
      },
      {
        "rank": 0,
        "subtype": "mediumThreeByTwo210",
        "caption": null,
        "credit": null,
        "type": "image",
        "url": "images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-mediumThreeByTwo210.jpg",
        "height": 140,
        "width": 210,
        "legacy": {},
        "subType": "mediumThreeByTwo210",
        "crop_name": "mediumThreeByTwo210"
      },
      {
        "rank": 0,
        "subtype": "mediumThreeByTwo225",
        "caption": null,
        "credit": null,
        "type": "image",
        "url": "images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-mediumThreeByTwo225.jpg",
        "height": 150,
        "width": 225,
        "legacy": {},
        "subType": "mediumThreeByTwo225",
        "crop_name": "mediumThreeByTwo225"
      },
      {
        "rank": 0,
        "subtype": "mediumThreeByTwo440",
        "caption": null,
        "credit": null,
        "type": "image",
        "url": "images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-mediumThreeByTwo440.jpg",
        "height": 293,
        "width": 440,
        "legacy": {},
        "subType": "mediumThreeByTwo440",
        "crop_name": "mediumThreeByTwo440"
      },
      {
        "rank": 0,
        "subtype": "mediumThreeByTwo378",
        "caption": null,
        "credit": null,
        "type": "image",
        "url": "images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-mediumThreeByTwo378.jpg",
        "height": 252,
        "width": 378,
        "legacy": {},
        "subType": "mediumThreeByTwo378",
        "crop_name": "mediumThreeByTwo378"
      },
      {
        "rank": 0,
        "subtype": "mediumThreeByTwo252",
        "caption": null,
        "credit": null,
        "type": "image",
        "url": "images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-mediumThreeByTwo252.jpg",
        "height": 168,
        "width": 252,
        "legacy": {},
        "subType": "mediumThreeByTwo252",
        "crop_name": "mediumThreeByTwo252"
      },
      {
        "rank": 0,
        "subtype": "miniMoth",
        "caption": null,
        "credit": null,
        "type": "image",
        "url": "images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-miniMoth.jpg",
        "height": 70,
        "width": 151,
        "legacy": {},
        "subType": "miniMoth",
        "crop_name": "miniMoth"
      },
      {
        "rank": 0,
        "subtype": "moth",
        "caption": null,
        "credit": null,
        "type": "image",
        "url": "images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-moth.jpg",
        "height": 151,
        "width": 151,
        "legacy": {},
        "subType": "moth",
        "crop_name": "moth"
      },
      {
        "rank": 0,
        "subtype": "popup",
        "caption": null,
        "credit": null,
        "type": "image",
        "url": "images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-popup.jpg",
        "height": 488,
        "width": 650,
        "legacy": {},
        "subType": "popup",
        "crop_name": "popup"
      },
      {
        "rank": 0,
        "subtype": "sfSpan",
        "caption": null,
        "credit": null,
        "type": "image",
        "url": "images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-sfSpan.jpg",
        "height": 263,
        "width": 395,
        "legacy": {},
        "subType": "sfSpan",
        "crop_name": "sfSpan"
      },
      {
        "rank": 0,
        "subtype": "slide",
        "caption": null,
        "credit": null,
        "type": "image",
        "url": "images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-slide.jpg",
        "height": 450,
        "width": 600,
        "legacy": {},
        "subType": "slide",
        "crop_name": "slide"
      },
      {
        "rank": 0,
        "subtype": "smallSquare168",
        "caption": null,
        "credit": null,
        "type": "image",
        "url": "images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-smallSquare168.jpg",
        "height": 168,
        "width": 168,
        "legacy": {},
        "subType": "smallSquare168",
        "crop_name": "smallSquare168"
      },
      {
        "rank": 0,
        "subtype": "smallSquare252",
        "caption": null,
        "credit": null,
        "type": "image",
        "url": "images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-smallSquare252.jpg",
        "height": 252,
        "width": 252,
        "legacy": {},
        "subType": "smallSquare252",
        "crop_name": "smallSquare252"
      },
      {
        "rank": 0,
        "subtype": "square320",
        "caption": null,
        "credit": null,
        "type": "image",
        "url": "images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-square320.jpg",
        "height": 320,
        "width": 320,
        "legacy": {},
        "subType": "square320",
        "crop_name": "square320"
      },
      {
        "rank": 0,
        "subtype": "square640",
        "caption": null,
        "credit": null,
        "type": "image",
        "url": "images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-square640.jpg",
        "height": 640,
        "width": 640,
        "legacy": {},
        "subType": "square640",
        "crop_name": "square640"
      },
      {
        "rank": 0,
        "subtype": "superJumbo",
        "caption": null,
        "credit": null,
        "type": "image",
        "url": "images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-superJumbo.jpg",
        "height": 1536,
        "width": 2048,
        "legacy": {},
        "subType": "superJumbo",
        "crop_name": "superJumbo"
      },
      {
        "rank": 0,
        "subtype": "thumbLarge",
        "caption": null,
        "credit": null,
        "type": "image",
        "url": "images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-thumbLarge.jpg",
        "height": 150,
        "width": 150,
        "legacy": {},
        "subType": "thumbLarge",
        "crop_name": "thumbLarge"
      },
      {
        "rank": 0,
        "subtype": "tmagArticle",
        "caption": null,
        "credit": null,
        "type": "image",
        "url": "images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-tmagArticle.jpg",
        "height": 444,
        "width": 592,
        "legacy": {},
        "subType": "tmagArticle",
        "crop_name": "tmagArticle"
      },
      {
        "rank": 0,
        "subtype": "tmagSF",
        "caption": null,
        "credit": null,
        "type": "image",
        "url": "images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-tmagSF.jpg",
        "height": 272,
        "width": 362,
        "legacy": {},
        "subType": "tmagSF",
        "crop_name": "tmagSF"
      },
      {
        "rank": 0,
        "subtype": "verticalTwoByThree735",
        "caption": null,
        "credit": null,
        "type": "image",
        "url": "images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-verticalTwoByThree735.jpg",
        "height": 1102,
        "width": 735,
        "legacy": {},
        "subType": "verticalTwoByThree735",
        "crop_name": "verticalTwoByThree735"
      },
      {
        "rank": 0,
        "subtype": "videoFifteenBySeven1305",
        "caption": null,
        "credit": null,
        "type": "image",
        "url": "images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-videoFifteenBySeven1305.jpg",
        "height": 609,
        "width": 1305,
        "legacy": {},
        "subType": "videoFifteenBySeven1305",
        "crop_name": "videoFifteenBySeven1305"
      },
      {
        "rank": 0,
        "subtype": "videoFifteenBySeven2610",
        "caption": null,
        "credit": null,
        "type": "image",
        "url": "images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-videoFifteenBySeven2610.jpg",
        "height": 1218,
        "width": 2610,
        "legacy": {},
        "subType": "videoFifteenBySeven2610",
        "crop_name": "videoFifteenBySeven2610"
      },
      {
        "rank": 0,
        "subtype": "videoHpMedium",
        "caption": null,
        "credit": null,
        "type": "image",
        "url": "images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-videoHpMedium.jpg",
        "height": 211,
        "width": 375,
        "legacy": {},
        "subType": "videoHpMedium",
        "crop_name": "videoHpMedium"
      },
      {
        "rank": 0,
        "subtype": "videoLarge",
        "caption": null,
        "credit": null,
        "type": "image",
        "url": "images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-videoLarge.jpg",
        "height": 507,
        "width": 768,
        "legacy": {},
        "subType": "videoLarge",
        "crop_name": "videoLarge"
      },
      {
        "rank": 0,
        "subtype": "videoSixteenByNine1050",
        "caption": null,
        "credit": null,
        "type": "image",
        "url": "images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-videoSixteenByNine1050.jpg",
        "height": 591,
        "width": 1050,
        "legacy": {},
        "subType": "videoSixteenByNine1050",
        "crop_name": "videoSixteenByNine1050"
      },
      {
        "rank": 0,
        "subtype": "videoSixteenByNine150",
        "caption": null,
        "credit": null,
        "type": "image",
        "url": "images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-videoSixteenByNine150.jpg",
        "height": 84,
        "width": 150,
        "legacy": {},
        "subType": "videoSixteenByNine150",
        "crop_name": "videoSixteenByNine150"
      },
      {
        "rank": 0,
        "subtype": "videoSixteenByNine225",
        "caption": null,
        "credit": null,
        "type": "image",
        "url": "images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-videoSixteenByNine225.jpg",
        "height": 126,
        "width": 225,
        "legacy": {},
        "subType": "videoSixteenByNine225",
        "crop_name": "videoSixteenByNine225"
      },
      {
        "rank": 0,
        "subtype": "videoSixteenByNine3000",
        "caption": null,
        "credit": null,
        "type": "image",
        "url": "images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-videoSixteenByNine3000.jpg",
        "height": 1688,
        "width": 3000,
        "legacy": {},
        "subType": "videoSixteenByNine3000",
        "crop_name": "videoSixteenByNine3000"
      },
      {
        "rank": 0,
        "subtype": "videoSixteenByNine310",
        "caption": null,
        "credit": null,
        "type": "image",
        "url": "images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-videoSixteenByNine310.jpg",
        "height": 174,
        "width": 310,
        "legacy": {},
        "subType": "videoSixteenByNine310",
        "crop_name": "videoSixteenByNine310"
      },
      {
        "rank": 0,
        "subtype": "videoSixteenByNine390",
        "caption": null,
        "credit": null,
        "type": "image",
        "url": "images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-videoSixteenByNine390.jpg",
        "height": 219,
        "width": 390,
        "legacy": {},
        "subType": "videoSixteenByNine390",
        "crop_name": "videoSixteenByNine390"
      },
      {
        "rank": 0,
        "subtype": "videoSixteenByNine480",
        "caption": null,
        "credit": null,
        "type": "image",
        "url": "images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-videoSixteenByNine480.jpg",
        "height": 270,
        "width": 480,
        "legacy": {},
        "subType": "videoSixteenByNine480",
        "crop_name": "videoSixteenByNine480"
      },
      {
        "rank": 0,
        "subtype": "videoSixteenByNine495",
        "caption": null,
        "credit": null,
        "type": "image",
        "url": "images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-videoSixteenByNine495.jpg",
        "height": 278,
        "width": 495,
        "legacy": {},
        "subType": "videoSixteenByNine495",
        "crop_name": "videoSixteenByNine495"
      },
      {
        "rank": 0,
        "subtype": "videoSixteenByNine540",
        "caption": null,
        "credit": null,
        "type": "image",
        "url": "images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-videoSixteenByNine540.jpg",
        "height": 304,
        "width": 540,
        "legacy": {},
        "subType": "videoSixteenByNine540",
        "crop_name": "videoSixteenByNine540"
      },
      {
        "rank": 0,
        "subtype": "videoSixteenByNine600",
        "caption": null,
        "credit": null,
        "type": "image",
        "url": "images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-videoSixteenByNine600.jpg",
        "height": 338,
        "width": 600,
        "legacy": {},
        "subType": "videoSixteenByNine600",
        "crop_name": "videoSixteenByNine600"
      },
      {
        "rank": 0,
        "subtype": "videoSixteenByNine768",
        "caption": null,
        "credit": null,
        "type": "image",
        "url": "images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-videoSixteenByNine768.jpg",
        "height": 432,
        "width": 768,
        "legacy": {},
        "subType": "videoSixteenByNine768",
        "crop_name": "videoSixteenByNine768"
      },
      {
        "rank": 0,
        "subtype": "videoSixteenByNine96",
        "caption": null,
        "credit": null,
        "type": "image",
        "url": "images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-videoSixteenByNine96.jpg",
        "height": 54,
        "width": 96,
        "legacy": {},
        "subType": "videoSixteenByNine96",
        "crop_name": "videoSixteenByNine96"
      },
      {
        "rank": 0,
        "subtype": "videoSixteenByNineJumbo1600",
        "caption": null,
        "credit": null,
        "type": "image",
        "url": "images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-videoSixteenByNineJumbo1600.jpg",
        "height": 900,
        "width": 1600,
        "legacy": {},
        "subType": "videoSixteenByNineJumbo1600",
        "crop_name": "videoSixteenByNineJumbo1600"
      },
      {
        "rank": 0,
        "subtype": "videoSmall",
        "caption": null,
        "credit": null,
        "type": "image",
        "url": "images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-videoSmall.jpg",
        "height": 281,
        "width": 500,
        "legacy": {},
        "subType": "videoSmall",
        "crop_name": "videoSmall"
      },
      {
        "rank": 0,
        "subtype": "videoThumb",
        "caption": null,
        "credit": null,
        "type": "image",
        "url": "images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-videoThumb.jpg",
        "height": 50,
        "width": 75,
        "legacy": {},
        "subType": "videoThumb",
        "crop_name": "videoThumb"
      },
      {
        "rank": 0,
        "subtype": "watch268",
        "caption": null,
        "credit": null,
        "type": "image",
        "url": "images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-watch268.jpg",
        "height": 303,
        "width": 272,
        "legacy": {},
        "subType": "watch268",
        "crop_name": "watch268"
      },
      {
        "rank": 0,
        "subtype": "watch308",
        "caption": null,
        "credit": null,
        "type": "image",
        "url": "images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-watch308.jpg",
        "height": 348,
        "width": 312,
        "legacy": {},
        "subType": "watch308",
        "crop_name": "watch308"
      },
      {
        "rank": 0,
        "subtype": "windowsTile336H",
        "caption": null,
        "credit": null,
        "type": "image",
        "url": "images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-windowsTile336H.jpg",
        "height": 336,
        "width": 694,
        "legacy": {},
        "subType": "windowsTile336H",
        "crop_name": "windowsTile336H"
      }
    ],
    "headline": "Singapore, for Those Who Aren’t Crazy Rich",
    "keywords": [
      {
        "name": "subject",
        "value": "Travel and Vacations",
        "rank": 1,
        "major": "N"
      },
      {
        "name": "glocations",
        "value": "Singapore",
        "rank": 2,
        "major": "N"
      },
      {
        "name": "creative_works",
        "value": "Crazy Rich Asians (Movie)",
        "rank": 3,
        "major": "N"
      }
    ],
    "pub_date": "2018-09-21T04:01:06+0000",
    "document_type": "article",
    "news_desk": "Travel",
    "byline": {
      "original": "By SANJAY SURANA",
      "person": [
        {
          "firstname": "Sanjay",
          "middlename": null,
          "lastname": "SURANA",
          "qualifier": null,
          "title": null,
          "role": "reported",
          "organization": "",
          "rank": 1
        }
      ],
      "organization": null
    },
    "type_of_material": "News",
    "_id": "5ba46d04068401528a2dc251",
    "word_count": 1351,
    "score": 110.03747,
    "uri": "nyt://article/2082f141-09b3-5717-8c16-fe640dab5b62",
    "id": "5ba46d04068401528a2dc251",
    "image": "https://www.nytimes.com/images/2018/09/23/travel/23singapore1/merlin_142944708_9276e9dd-b36e-40f3-90f6-34e79e64552e-articleLarge.jpg",
    "formattedDate": "09/21/2018"
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {}
];
