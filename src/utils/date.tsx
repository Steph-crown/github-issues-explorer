const date = {
  relativeTime: (dateTime: Date) => {
    const toISOFormat = new Date(dateTime).toISOString();

    return <relative-time datetime={toISOFormat} />;
  },
};

export default date;
