import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';

/* components */
// import TopImage from 'components/topImage';

const metaData = {
  title: 'Redux Easy Boilerplate',
  description: 'Start you project easy and fast with modern tools',
  canonical: 'http://example.com/path/to/page',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'react,meta,document,html,tags',
    },
  },
};

export default class Home extends Component {
  render() {
    return (
      <section>
        <DocumentMeta {...metaData} />
      </section>
    );
  }
}