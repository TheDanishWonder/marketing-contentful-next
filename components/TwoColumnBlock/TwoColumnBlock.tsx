import React from 'react';
import Link from 'next/link';
import { RichText } from '@/components/RichText';
import { ITwoBlockColumn } from '@/types/contentful';
import { CtfLink } from '../Link';

export const TwoBlockColumn = ({ fields }: ITwoBlockColumn) => {
  return (
    <div className={fields.turnPink ? "bg-nxa-pink" : "bg-white"}>
      <div className="flex max-w-7xl mx-auto py-10 lg:py-20">
        <div className="flex flex-col gap-4 w-6/12  py-4 lg:py-2 px-4 sm:px-6 lg:px-12">
          <RichText
            className="text-2xl  text-gray-900 tracking-tight sm:text-5xl"
            richTextDocument={fields.headline}
          />
          <RichText
            className="text-xl text-gray-900"
            richTextDocument={fields.subline}
          />
          {fields.link?.fields.slug && (
            <div key={fields.link.sys.id} className=" w-fit">
              <Link passHref href={fields.link.fields.slug} legacyBehavior rel="preload">
                <CtfLink>
                  {fields.link.fields.linkText}
                </CtfLink>
              </Link>
            </div>
          )}
        </div>
        <div className="mt-5 mx-auto flex flex-col lg:w-6/12 items-center justify-center space-y-5 hover-group">
          {fields.services?.map((service) => {
            if (!service.fields.slug) {
              return null;
            }
            return (
              <div key={service.sys.id} className="text-4xl w-full link-item transition-all duration-300 hover:opacity-100 hover:scale-[1.03]">
                <Link passHref href={service.fields.slug} legacyBehavior rel="preload">
                  <CtfLink>
                    {service.fields.linkText}
                  </CtfLink>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>

  );
};

export default TwoBlockColumn;
