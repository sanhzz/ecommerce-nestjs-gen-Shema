export interface DatabaseConfig {
    POSTGRES_HOST: string;
    POSTGRES_PORT: number;
    POSTGRES_USER: string;
    POSTGRES_PASSWORD: string;
    POSTGRES_DB: string;
}
declare const progress_dbConfig: () => DatabaseConfig;
export default progress_dbConfig;
