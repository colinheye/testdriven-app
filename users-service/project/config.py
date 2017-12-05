# users-service/project/config.py


class BaseConfig:
    """Base configuration"""
    DEBUG = False
    TESTING = False


class DevelopmentConfig:
    """Development configuration"""
    DEBUG = True


class TestingConfig:
    """Testing configuration"""
    DEBUG = True
    TESTING = True


class ProductionConfig:
    """Production configuration"""
    DEBUG = False
