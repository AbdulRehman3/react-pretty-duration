# react-pretty-duration

![npm bundle size](https://img.shields.io/bundlephobia/min/react-pretty-duration)
![npm](https://img.shields.io/npm/dt/react-pretty-duration)
![npm](https://img.shields.io/npm/v/react-pretty-duration)
![NPM](https://img.shields.io/npm/l/react-pretty-duration)

react-pretty-duration is a reactjs package converting numbered duration to user friendly duration text.

## Installation

Use the npm to install react-pretty-duration.

```bash
npm install react-pretty-duration
```

## Usage

```jsx
import React from 'react';
import PrettyDuration from 'react-pretty-duration';

const App = () => {
	return (
		// provide total minutes
		<PrettyDuration duration={200} />
	)
}
// result => 3hr 20min
```

## Demo

[react-pretty-duration](https://codesandbox.io/s/react-pretty-duration-2krwk)

## Props

| props    | type   | default | description                               | required |
|----------|--------|---------|-------------------------------------------|----------|
| duration | number | 0       | numbered duration in minutes, must be greater than 0 | true     |
| className| string | 0       | className for element styling             | false    |
| style    | style object | 0 | object for inline styling                 | false    |


## Notice
This package uses react hooks, so would works with react@16.8 or greater

## License
MIT