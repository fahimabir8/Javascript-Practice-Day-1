let friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

const name = (friends) => {
    let bigName = friends[0];
  
    for (let i = 0; i < friends.length; i++) {
      const element = friends[i];
      if (element.length > bigName.length) {
        bigName = element;
      }
    }
    return bigName;
  };
  
  const submit = name(friends);
  console.log(submit);
