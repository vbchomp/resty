import './results.scss';

function Results(props) {
  console.log('props', props);
  if (props.data) {
    const isLoading = props.loading ? (
      <span>...Loading</span>
    ) : (
      <section>
        <span>count: {props.data.count}</span>
        <pre>{props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre>
      </section>
    );

    return isLoading;
  }
  return null;
}

export default Results;
