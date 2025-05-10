import db from '~/models';

export const startAndConnectDB = async () => {
    await db.sequelize.authenticate();
    await db.sequelize.sync();
    initial();
    console.log('App ConnectDB Successfully');
};

function initial() {
    const Role = db.role;
    Role.findOrCreate({ where: { name: 'user' } });
    Role.findOrCreate({ where: { name: 'moderator' } });
    Role.findOrCreate({ where: { name: 'admin' } });
}
