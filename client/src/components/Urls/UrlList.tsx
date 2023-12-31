/** @format */

import Link from 'next/link';
import React from 'react';
import styles from './UrlList.module.scss';
import { IShortUrl } from '@typings/shortUrl';

interface shortUrlListProps {
  shortUrls: IShortUrl[];
}

export const UrlList: React.FC<shortUrlListProps> = ({ shortUrls }) => {
  return (
    <ul className={styles.root}>
      {shortUrls.map(({ shortUrl, _id, longUrl }, i) => (
        <li key={_id}>
          <Link href={longUrl}>
            {i + 1}: {shortUrl}
          </Link>
        </li>
      ))}
    </ul>
  );
};
