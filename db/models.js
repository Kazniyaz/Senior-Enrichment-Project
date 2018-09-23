const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL);

const Student = db.define('users', {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  gpa: Sequelize.INTEGER,
});

const School = db.define('schools', {
  name: Sequelize.STRING,
  address: Sequelize.STRING,
  description: Sequelize.TEXT,
});

Student.belongsTo(School);
School.hasMany(Student);

const syncAndSeed = async () => {
  await School.sync({ force: true });
  await Student.sync({ force: true });
  await School.create({
    name: 'KTL',
    address: 'Astana',
    description: 'School I once attended',
  });
  await Student.create({
    firstName: 'Khabib',
    lastName: 'Nurmagomedov',
    gpa: 4,
    schoolId: 1,
  });
};

module.exports = {
  Student,
  School,
  syncAndSeed,
};
