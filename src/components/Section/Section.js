import PropTypes from 'prop-types';

import {  SectionStyle, PageHeader } from './Section.styled';


export const SectionMain = ({ title, children }) => (
  <>
    <PageHeader>{title}</PageHeader>
    {children}
  </>
);

export const SectionHeader = ({title}) => {
  return (
    <SectionStyle>{title}</SectionStyle>
  )
};


SectionMain.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

SectionHeader.propTypes ={
  title: PropTypes.string.isRequired,
}


