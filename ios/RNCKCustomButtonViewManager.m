// RNCKCustomButtonViewManager.m
#import "RNCKCustomButtonViewManager.h"
#import "RNCKCustomButton.h"
@implementation RNCKCustomButtonViewManager

// 2.
RCT_EXPORT_MODULE(CustomButton)

// 3.
- (UIButton *)view
{
    return [[RNCKCustomButton alloc] initWithFrame:CGRectZero];
}

@end
