import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/av1-wiki.github.io/__docusaurus/debug',
    component: ComponentCreator('/av1-wiki.github.io/__docusaurus/debug', 'aab'),
    exact: true
  },
  {
    path: '/av1-wiki.github.io/__docusaurus/debug/config',
    component: ComponentCreator('/av1-wiki.github.io/__docusaurus/debug/config', '39d'),
    exact: true
  },
  {
    path: '/av1-wiki.github.io/__docusaurus/debug/content',
    component: ComponentCreator('/av1-wiki.github.io/__docusaurus/debug/content', 'ea8'),
    exact: true
  },
  {
    path: '/av1-wiki.github.io/__docusaurus/debug/globalData',
    component: ComponentCreator('/av1-wiki.github.io/__docusaurus/debug/globalData', 'a49'),
    exact: true
  },
  {
    path: '/av1-wiki.github.io/__docusaurus/debug/metadata',
    component: ComponentCreator('/av1-wiki.github.io/__docusaurus/debug/metadata', 'ee6'),
    exact: true
  },
  {
    path: '/av1-wiki.github.io/__docusaurus/debug/registry',
    component: ComponentCreator('/av1-wiki.github.io/__docusaurus/debug/registry', '893'),
    exact: true
  },
  {
    path: '/av1-wiki.github.io/__docusaurus/debug/routes',
    component: ComponentCreator('/av1-wiki.github.io/__docusaurus/debug/routes', '7c0'),
    exact: true
  },
  {
    path: '/av1-wiki.github.io/markdown-page',
    component: ComponentCreator('/av1-wiki.github.io/markdown-page', '8d7'),
    exact: true
  },
  {
    path: '/av1-wiki.github.io/docs',
    component: ComponentCreator('/av1-wiki.github.io/docs', '842'),
    routes: [
      {
        path: '/av1-wiki.github.io/docs/audio/AAC',
        component: ComponentCreator('/av1-wiki.github.io/docs/audio/AAC', 'de8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/av1-wiki.github.io/docs/contribution-guide',
        component: ComponentCreator('/av1-wiki.github.io/docs/contribution-guide', '7a6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/av1-wiki.github.io/docs/encoders/aomenc',
        component: ComponentCreator('/av1-wiki.github.io/docs/encoders/aomenc', 'c9e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/av1-wiki.github.io/docs/encoders/AVM',
        component: ComponentCreator('/av1-wiki.github.io/docs/encoders/AVM', 'cd8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/av1-wiki.github.io/docs/encoders/HM',
        component: ComponentCreator('/av1-wiki.github.io/docs/encoders/HM', '50b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/av1-wiki.github.io/docs/encoders/JM',
        component: ComponentCreator('/av1-wiki.github.io/docs/encoders/JM', 'f3e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/av1-wiki.github.io/docs/encoders/Kvaazar',
        component: ComponentCreator('/av1-wiki.github.io/docs/encoders/Kvaazar', '514'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/av1-wiki.github.io/docs/encoders/rav1e',
        component: ComponentCreator('/av1-wiki.github.io/docs/encoders/rav1e', 'e4f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/av1-wiki.github.io/docs/encoders/SVT-AV1',
        component: ComponentCreator('/av1-wiki.github.io/docs/encoders/SVT-AV1', '0de'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/av1-wiki.github.io/docs/encoders/SVT-HEVC',
        component: ComponentCreator('/av1-wiki.github.io/docs/encoders/SVT-HEVC', 'cf8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/av1-wiki.github.io/docs/encoders/SVT-VP9',
        component: ComponentCreator('/av1-wiki.github.io/docs/encoders/SVT-VP9', 'c3f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/av1-wiki.github.io/docs/encoders/uvg266',
        component: ComponentCreator('/av1-wiki.github.io/docs/encoders/uvg266', 'fdc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/av1-wiki.github.io/docs/encoders/vpxenc',
        component: ComponentCreator('/av1-wiki.github.io/docs/encoders/vpxenc', 'c43'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/av1-wiki.github.io/docs/encoders/VTM',
        component: ComponentCreator('/av1-wiki.github.io/docs/encoders/VTM', 'b40'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/av1-wiki.github.io/docs/encoders/VVenC',
        component: ComponentCreator('/av1-wiki.github.io/docs/encoders/VVenC', 'c91'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/av1-wiki.github.io/docs/encoders/x264',
        component: ComponentCreator('/av1-wiki.github.io/docs/encoders/x264', '397'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/av1-wiki.github.io/docs/encoders/x265',
        component: ComponentCreator('/av1-wiki.github.io/docs/encoders/x265', '848'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/av1-wiki.github.io/docs/FAQ',
        component: ComponentCreator('/av1-wiki.github.io/docs/FAQ', '71c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/av1-wiki.github.io/docs/filtering/deband',
        component: ComponentCreator('/av1-wiki.github.io/docs/filtering/deband', '0d3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/av1-wiki.github.io/docs/filtering/dehalo',
        component: ComponentCreator('/av1-wiki.github.io/docs/filtering/dehalo', '58b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/av1-wiki.github.io/docs/filtering/deinterlace',
        component: ComponentCreator('/av1-wiki.github.io/docs/filtering/deinterlace', '689'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/av1-wiki.github.io/docs/filtering/denoise',
        component: ComponentCreator('/av1-wiki.github.io/docs/filtering/denoise', '6e0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/av1-wiki.github.io/docs/filtering/detelecine',
        component: ComponentCreator('/av1-wiki.github.io/docs/filtering/detelecine', '61c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/av1-wiki.github.io/docs/filtering/intro',
        component: ComponentCreator('/av1-wiki.github.io/docs/filtering/intro', '36b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/av1-wiki.github.io/docs/filtering/Vapoursynth',
        component: ComponentCreator('/av1-wiki.github.io/docs/filtering/Vapoursynth', '9de'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/av1-wiki.github.io/docs/introduction/codecs',
        component: ComponentCreator('/av1-wiki.github.io/docs/introduction/codecs', '5d7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/av1-wiki.github.io/docs/introduction/containers',
        component: ComponentCreator('/av1-wiki.github.io/docs/introduction/containers', '307'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/av1-wiki.github.io/docs/introduction/high-dynamic-range',
        component: ComponentCreator('/av1-wiki.github.io/docs/introduction/high-dynamic-range', '478'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/av1-wiki.github.io/docs/introduction/prologue',
        component: ComponentCreator('/av1-wiki.github.io/docs/introduction/prologue', 'd99'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/av1-wiki.github.io/docs/introduction/psychovisual',
        component: ComponentCreator('/av1-wiki.github.io/docs/introduction/psychovisual', 'f7f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/av1-wiki.github.io/docs/introduction/video-artifacts',
        component: ComponentCreator('/av1-wiki.github.io/docs/introduction/video-artifacts', 'd5c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/av1-wiki.github.io/docs/metrics',
        component: ComponentCreator('/av1-wiki.github.io/docs/metrics', 'd1e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/av1-wiki.github.io/docs/prequisites',
        component: ComponentCreator('/av1-wiki.github.io/docs/prequisites', 'e47'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/av1-wiki.github.io/docs/privacy-policy',
        component: ComponentCreator('/av1-wiki.github.io/docs/privacy-policy', '065'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/av1-wiki.github.io/docs/resources',
        component: ComponentCreator('/av1-wiki.github.io/docs/resources', '0e1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/av1-wiki.github.io/docs/subtitles/SRT',
        component: ComponentCreator('/av1-wiki.github.io/docs/subtitles/SRT', 'd36'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/av1-wiki.github.io/docs/subtitles/webvtt',
        component: ComponentCreator('/av1-wiki.github.io/docs/subtitles/webvtt', '212'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/av1-wiki.github.io/docs/utilities/av1an',
        component: ComponentCreator('/av1-wiki.github.io/docs/utilities/av1an', 'fea'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/av1-wiki.github.io/docs/utilities/dovi_tool',
        component: ComponentCreator('/av1-wiki.github.io/docs/utilities/dovi_tool', '71e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/av1-wiki.github.io/docs/utilities/eac3to',
        component: ComponentCreator('/av1-wiki.github.io/docs/utilities/eac3to', 'fdc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/av1-wiki.github.io/docs/utilities/FFMetrics',
        component: ComponentCreator('/av1-wiki.github.io/docs/utilities/FFMetrics', 'caf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/av1-wiki.github.io/docs/utilities/hdr10plus_tool',
        component: ComponentCreator('/av1-wiki.github.io/docs/utilities/hdr10plus_tool', 'c08'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/av1-wiki.github.io/docs/utilities/MKVToolNix',
        component: ComponentCreator('/av1-wiki.github.io/docs/utilities/MKVToolNix', '4e6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/av1-wiki.github.io/docs/utilities/YUView',
        component: ComponentCreator('/av1-wiki.github.io/docs/utilities/YUView', '08c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/av1-wiki.github.io/docs/video-players',
        component: ComponentCreator('/av1-wiki.github.io/docs/video-players', '815'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/av1-wiki.github.io/',
    component: ComponentCreator('/av1-wiki.github.io/', '308'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];