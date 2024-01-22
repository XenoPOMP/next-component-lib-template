import cn from 'classnames';
import { FC } from 'react';

import styles from './SampleComponent.module.scss';
import type { SampleComponentProps } from './SampleComponent.props';

const SampleComponent: FC<SampleComponentProps> = ({}) => {
  return <div>This is an React component!</div>;
};

export default SampleComponent;
