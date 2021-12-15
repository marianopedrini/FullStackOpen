const Notification = ({ notification }) => {
  const succesfullyStyle = {
    backgroundColor: 'whitesmoke',
    padding: '0 30px',
    border: '3px solid green',
    borderRadius: 15,
    fontSize: 20,
    maxWidth: 500,
  };
  const wrongStyle = {
    backgroundColor: 'whitesmoke',
    padding: '0 30px',
    border: '3px solid red',
    borderRadius: 15,
    fontSize: 20,
    maxWidth: 500,
  };

  if (notification.message === null) {
    return '';
  }

  return (
    <div style={notification.succesfully ? succesfullyStyle : wrongStyle}>
      <p>{notification.message}</p>
    </div>
  );
};

export default Notification;
