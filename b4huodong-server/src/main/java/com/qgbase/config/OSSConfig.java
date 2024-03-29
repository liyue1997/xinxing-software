package com.qgbase.config;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

/**
 * @author : shl
 * @date : 2019/8/5
 */
@Data
@Configuration
@ConfigurationProperties(prefix = "aliyun.oss")
public class OSSConfig {

    private String endpoint;

    private String accessKeyId;

    private String accessKeySecret;

    private String bucketName;

}
