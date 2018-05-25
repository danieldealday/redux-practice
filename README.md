# Redux Single File Introduction
- view `index.js` to see comments teaching `redux`
- `react-redux` package is required to use `redux` with `react`
  - `react-redux` give `providers` and `consumers`
    - `mapStateToProps, mapDispatchToProps, connect`
      - `mapStateToProps` define which state will be available to a component from the global state
      - `mapDispatchToProps` define which actions will be available to a component from the 
      - `connect` wires the component into `redux`
        - the returned value of the `connect` is what is exported out of the component's file