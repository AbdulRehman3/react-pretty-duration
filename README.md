# react-pretty-duration

react-pretty-duration is a reactjs package converting numbered duration to user friendly duration text.

## Installation

Use the npm to install react-pretty-duration.

```bash
npm install react-pretty-duration
```

## Usage

```jsx
import PrettyDuration from 'react-pretty-duration'

const App = (props) => {
    return (
        <div>
            <PrettyDuration duration={50} />
        </div>
    )
}
```

## Props

| props    | type   | default | description                               | required |
|----------|--------|---------|-------------------------------------------|----------|
| duration | number | 0       | numbered duration, must be greater than 0 | true     |

## Notice
This package uses react hooks, so would works with react@16.8 or greater

## License
MIT