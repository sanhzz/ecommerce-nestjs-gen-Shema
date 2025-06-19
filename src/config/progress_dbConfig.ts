export interface DatabaseConfig {
  POSTGRES_HOST: string;
  POSTGRES_PORT: number;
  POSTGRES_USER: string;
  POSTGRES_PASSWORD: string;
  POSTGRES_DB: string;
}

const progress_dbConfig = (): DatabaseConfig => {
//   console.log('🔍 ENV:', process.env); 

  return {
    POSTGRES_HOST: process.env.POSTGRES_HOST || 'localhost',
    POSTGRES_PORT: parseInt(process.env.POSTGRES_PORT || '5432', 10),
    POSTGRES_USER: process.env.POSTGRES_USER || 'postgres',
    POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD || 'password',
    POSTGRES_DB: process.env.POSTGRES_DB || 'medusa_db',
  };
};

export default progress_dbConfig;
