# react-pretty-duration

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
        <PrettyDuration duration={50} />
    )
}
```

## Props

| props    | type   | default | description                               | required |
|----------|--------|---------|-------------------------------------------|----------|
| duration | number | 0       | numbered duration, must be greater than 0 | true     |
| className| string | 0       | className for element styling             | false    |
| style    | style object | 0 | object for inline styling                 | false    |


## Notice
This package uses react hooks, so would works with react@16.8 or greater

## License
MIT