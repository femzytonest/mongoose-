const person = new person({
    name: 'Alice',
    age: 25,
    favoriteFoods: ['Pasta', 'Salad'],
  });
  
  person.save((err, data) => {
    if (err) console.error(err);
    else console.log('Saved person:', data);
  });

  
  const arrayOfPeople = [
    { name: 'Bob', age: 28, favoriteFoods: ['Pizza'] },
    { name: 'Charlie', age: 32, favoriteFoods: ['Steak', 'Fries'] },
    { name: 'Mary', age: 22, favoriteFoods: ['Ice Cream', 'Burgers'] },
  ];
  
  person.create(arrayOfPeople, (err, data) => {
    if (err) console.error(err);
    else console.log('People created:', data);
  });

  
  person.find({ name: 'Mary' }, (err, data) => {
    if (err) console.error(err);
    else console.log('People named Mary:', data);
  });
  
  person.findOne({ favoriteFoods: 'Pizza' }, (err, data) => {
    if (err) console.error(err);
    else console.log('Person who likes Pizza:', data);
  });
  
  person.findById(personId, (err, data) => {
    if (err) console.error(err);
    else console.log('Person found by ID:', data);
  });

  
  person.findById(personId, (err, person) => {
    if (err) console.error(err);
    else {
      person.favoriteFoods.push('Hamburger');
      person.save((err, updatedPerson) => {
        if (err) console.error(err);
        else console.log('Updated person:', updatedPerson);
      });
    }
  });
  
  person.findOneAndUpdate(
    { name: 'Charlie' },
    { age: 20 },
    { new: true },
    (err, updatedPerson) => {
      if (err) console.error(err);
      else console.log('Updated person:', updatedPerson);
    }
  );

  
  person.findByIdAndRemove(personId, (err, removedPerson) => {
    if (err) console.error(err);
    else console.log('Removed person:', removedPerson);
  });
  
  person.deleteMany({ name: 'Mary' }, (err, result) => {
    if (err) console.error(err);
    else console.log('Deleted Mary(s):', result);
  });

  
  person.find({ favoriteFoods: 'Burritos' })
  .sort({ name: 1 })
  .limit(2)
  .select('-age')
  .exec((err, data) => {
    if (err) console.error(err);
    else console.log('Filtered people:', data);
  });
