# Environment Variables for Advanced 3D T-Shirt Design Tool

## Core Application Settings
```bash
# Application Environment
NODE_ENV=production
APP_NAME=CustomTees3D
APP_VERSION=2.0.0
APP_URL=https://customtees3d.com
PORT=3000
HOST=0.0.0.0

# API Configuration
API_BASE_URL=https://api.customtees3d.com
API_VERSION=v2
API_TIMEOUT=30000
API_RATE_LIMIT=1000
```

## 3D Rendering & Graphics Settings
```bash
# 3D Engine Configuration
THREEJS_VERSION=r158
WEBGL_VERSION=2
MAX_TEXTURE_SIZE=4096
RENDER_QUALITY=high
ANTIALIASING=true
SHADOWS_ENABLED=true
HDR_LIGHTING=true

# Performance Optimization
MAX_POLYGONS=50000
LOD_LEVELS=3
FRUSTUM_CULLING=true
OCCLUSION_CULLING=false
MIPMAPPING=true
TEXTURE_COMPRESSION=true

# Memory Management
MAX_MEMORY_USAGE=512MB
GARBAGE_COLLECTION_THRESHOLD=0.8
TEXTURE_CACHE_SIZE=256MB
GEOMETRY_CACHE_SIZE=128MB
```

## Body Shape & Fit Engine
```bash
# Body Shape Detection
BODY_SHAPE_AI_ENABLED=true
BODY_SHAPE_API_KEY=your_ai_service_key
MEASUREMENT_TOLERANCE=0.5
FIT_RECOMMENDATION_CONFIDENCE=0.85

# Size Chart Configuration
SIZE_CHART_VERSION=2024.1
MEASUREMENT_UNITS=inches
INTERNATIONAL_SIZING=true
CUSTOM_SIZING_ENABLED=true

# Fit Visualization
FIT_SIMULATION_QUALITY=high
FABRIC_PHYSICS_ENABLED=true
DRAPING_SIMULATION=true
STRETCH_SIMULATION=true
```

## Design Customization Features
```bash
# Design Tool Features
DESIGN_TOOL_VERSION=3.0
MAX_DESIGN_ELEMENTS=20
MAX_TEXT_ELEMENTS=10
MAX_IMAGE_UPLOADS=5
VECTOR_GRAPHICS_SUPPORT=true

# Color & Material System
COLOR_PROFILE=sRGB
MATERIAL_PBR_ENABLED=true
FABRIC_TEXTURE_QUALITY=high
COLOR_ACCURACY_MODE=true
HDR_ENVIRONMENT=studio

# Typography
FONT_RENDERING_ENGINE=canvas
CUSTOM_FONTS_ENABLED=true
FONT_CACHE_SIZE=50MB
TEXT_OUTLINE_SUPPORT=true
```

## File Upload & Storage
```bash
# File Upload Configuration
MAX_UPLOAD_SIZE=10MB
ALLOWED_FILE_TYPES=jpg,jpeg,png,svg,pdf
IMAGE_COMPRESSION_QUALITY=0.9
AUTO_RESIZE_IMAGES=true
WATERMARK_ENABLED=false

# Storage Configuration
STORAGE_PROVIDER=aws_s3
AWS_S3_BUCKET=customtees3d-assets
AWS_S3_REGION=us-east-1
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
CDN_URL=https://cdn.customtees3d.com
```

## Database Configuration
```bash
# Primary Database
DATABASE_URL=postgresql://user:password@localhost:5432/customtees3d
DATABASE_POOL_SIZE=20
DATABASE_TIMEOUT=30000
DATABASE_SSL=true

# Redis Cache
REDIS_URL=redis://localhost:6379
REDIS_PASSWORD=your_redis_password
CACHE_TTL=3600
SESSION_STORE=redis

# Search Engine
ELASTICSEARCH_URL=https://localhost:9200
ELASTICSEARCH_INDEX=tshirt_designs
SEARCH_ENABLED=true
```

## Payment & E-commerce
```bash
# Payment Processing
STRIPE_PUBLIC_KEY=pk_live_your_stripe_key
STRIPE_SECRET_KEY=sk_live_your_stripe_secret
PAYPAL_CLIENT_ID=your_paypal_client_id
PAYPAL_CLIENT_SECRET=your_paypal_secret

# Pricing Configuration
BASE_CURRENCY=USD
TAX_CALCULATION_SERVICE=taxjar
SHIPPING_CALCULATOR=shippo
DISCOUNT_ENGINE_ENABLED=true

# Order Management
ORDER_PROCESSING_QUEUE=redis
INVENTORY_SYNC_ENABLED=true
REAL_TIME_PRICING=true
```

## 3D Model & Asset Management
```bash
# 3D Model Configuration
MODEL_FORMAT=glb
MODEL_COMPRESSION=draco
ANIMATION_ENABLED=true
MORPH_TARGETS_ENABLED=true

# Asset Pipeline
ASSET_OPTIMIZATION=true
PROGRESSIVE_LOADING=true
LAZY_LOADING_ENABLED=true
PRELOAD_CRITICAL_ASSETS=true

# Model Variants
MALE_MODEL_VARIANTS=5
FEMALE_MODEL_VARIANTS=5
UNISEX_MODEL_VARIANTS=3
BODY_SHAPE_MORPHING=true
```

## Security & Authentication
```bash
# Authentication
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRY=24h
REFRESH_TOKEN_EXPIRY=7d
BCRYPT_ROUNDS=12

# Security Headers
CORS_ORIGIN=https://customtees3d.com
CSP_ENABLED=true
RATE_LIMITING_ENABLED=true
DDoS_PROTECTION=cloudflare

# API Security
API_KEY_REQUIRED=true
API_RATE_LIMIT_PER_MINUTE=100
IP_WHITELIST_ENABLED=false
```

## Performance & Monitoring
```bash
# Performance Monitoring
PERFORMANCE_MONITORING=datadog
DATADOG_API_KEY=your_datadog_key
APM_ENABLED=true
REAL_USER_MONITORING=true

# Error Tracking
ERROR_TRACKING=sentry
SENTRY_DSN=your_sentry_dsn
ERROR_SAMPLING_RATE=0.1

# Analytics
ANALYTICS_PROVIDER=google_analytics
GA_TRACKING_ID=GA-XXXX-X
HEATMAP_TRACKING=hotjar
CONVERSION_TRACKING=true
```

## Feature Flags
```bash
# 3D Features
FEATURE_3D_ROTATION=true
FEATURE_360_VIEW=true
FEATURE_AR_PREVIEW=false
FEATURE_VR_SUPPORT=false

# Design Features
FEATURE_AI_DESIGN_SUGGESTIONS=true
FEATURE_COLLABORATIVE_DESIGN=false
FEATURE_DESIGN_TEMPLATES=true
FEATURE_BULK_CUSTOMIZATION=true

# Body Shape Features
FEATURE_BODY_SHAPE_DETECTION=true
FEATURE_SIZE_PREDICTION=true
FEATURE_FIT_COMPARISON=true
FEATURE_VIRTUAL_FITTING=false
```

## Third-Party Integrations
```bash
# Design APIs
ADOBE_CREATIVE_SDK_KEY=your_adobe_key
CANVA_API_KEY=your_canva_key
UNSPLASH_ACCESS_KEY=your_unsplash_key

# Printing & Fulfillment
PRINTFUL_API_KEY=your_printful_key
GOOTEN_API_KEY=your_gooten_key
PRINT_PROVIDER=printful

# Shipping Integration
FEDEX_API_KEY=your_fedex_key
UPS_API_KEY=your_ups_key
DHL_API_KEY=your_dhl_key
USPS_API_KEY=your_usps_key
```

## Development & Testing
```bash
# Development Environment
DEBUG_MODE=false
VERBOSE_LOGGING=false
DEV_TOOLS_ENABLED=false
HOT_RELOAD=false

# Testing Configuration
TEST_DATABASE_URL=postgresql://test:test@localhost:5432/customtees3d_test
MOCK_PAYMENT_PROCESSOR=true
MOCK_3D_RENDERING=false
AUTOMATED_TESTING=true

# Staging Environment
STAGING_URL=https://staging.customtees3d.com
STAGING_DATABASE_URL=postgresql://staging:password@staging-db:5432/customtees3d_staging
```

## Deployment & Infrastructure
```bash
# Container Configuration
DOCKER_IMAGE=customtees3d:latest
CONTAINER_MEMORY_LIMIT=2GB
CONTAINER_CPU_LIMIT=1.0

# Load Balancing
LOAD_BALANCER=nginx
STICKY_SESSIONS=false
HEALTH_CHECK_ENDPOINT=/health
GRACEFUL_SHUTDOWN_TIMEOUT=30s

# Scaling Configuration
AUTO_SCALING_ENABLED=true
MIN_INSTANCES=2
MAX_INSTANCES=20
SCALE_UP_THRESHOLD=70
SCALE_DOWN_THRESHOLD=30
```

## Backup & Recovery
```bash
# Backup Configuration
BACKUP_ENABLED=true
BACKUP_FREQUENCY=daily
BACKUP_RETENTION=30d
BACKUP_STORAGE=aws_s3

# Disaster Recovery
DR_ENABLED=true
DR_REGION=us-west-2
RTO_MINUTES=15
RPO_MINUTES=5
```

## Localization & Internationalization
```bash
# Language Support
DEFAULT_LANGUAGE=en
SUPPORTED_LANGUAGES=en,es,fr,de,it,pt,ja,ko,zh
RTL_SUPPORT=false

# Regional Settings
DEFAULT_TIMEZONE=UTC
CURRENCY_CONVERSION=true
REGIONAL_SIZING=true
LOCAL_TAX_CALCULATION=true
```

## Email & Notifications
```bash
# Email Service
EMAIL_PROVIDER=sendgrid
SENDGRID_API_KEY=your_sendgrid_key
FROM_EMAIL=noreply@customtees3d.com
SUPPORT_EMAIL=support@customtees3d.com

# Push Notifications
PUSH_NOTIFICATIONS_ENABLED=true
FCM_SERVER_KEY=your_fcm_key
APPLE_PUSH_CERT=path/to/cert.pem

# SMS Notifications
SMS_PROVIDER=twilio
TWILIO_ACCOUNT_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_token
```

## Content Delivery Network
```bash
# CDN Configuration
CDN_PROVIDER=cloudflare
CDN_ZONE_ID=your_zone_id
CDN_API_TOKEN=your_cf_token
CACHE_PURGE_ENABLED=true

# Asset Optimization
IMAGE_OPTIMIZATION=true
JS_MINIFICATION=true
CSS_MINIFICATION=true
GZIP_COMPRESSION=true
BROTLI_COMPRESSION=true
```

## Quality Assurance
```bash
# Code Quality
LINTING_ENABLED=true
TYPE_CHECKING=true
CODE_COVERAGE_THRESHOLD=80
DEPENDENCY_SCANNING=true

# Performance Testing
LOAD_TESTING_ENABLED=true
PERFORMANCE_BUDGET=3s
LIGHTHOUSE_SCORING=true
ACCESSIBILITY_TESTING=true
```

## Usage Notes

1. **Security**: Never commit actual API keys or secrets to version control
2. **Environment-Specific**: Use different values for development, staging, and production
3. **Validation**: Implement environment variable validation on application startup
4. **Documentation**: Keep this file updated when adding new features
5. **Monitoring**: Set up alerts for when environment variables are missing or invalid
6. **Encryption**: Consider using environment variable encryption for sensitive data
7. **Backup**: Store environment configurations securely with backup systems

## Example Usage in Code

```javascript
// Environment variable validation
const requiredEnvVars = [
  'API_BASE_URL',
  'DATABASE_URL',
  'STRIPE_SECRET_KEY',
  'AWS_ACCESS_KEY_ID'
];

requiredEnvVars.forEach(envVar => {
  if (!process.env[envVar]) {
    throw new Error(`Missing required environment variable: ${envVar}`);
  }
});

// Feature flag usage
const is3DRotationEnabled = process.env.FEATURE_3D_ROTATION === 'true';
if (is3DRotationEnabled) {
  // Enable 3D rotation functionality
}
```